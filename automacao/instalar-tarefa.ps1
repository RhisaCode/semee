# Registra (ou atualiza) a tarefa que verifica o grupo da SEMEE 3x ao dia.
# Rode uma vez, em PowerShell comum (não precisa de administrador):
#   powershell -ExecutionPolicy Bypass -File C:\Projects\semee-site\automacao\instalar-tarefa.ps1

$ErrorActionPreference = 'Stop'

$nome    = 'SemeeNoticias'
$script  = 'C:\Projects\semee-site\automacao\checar_semee.py'
$python  = 'C:\Users\pedro\AppData\Local\Python\bin\python.exe'

if (-not (Test-Path $script)) { throw "não achei $script" }
if (-not (Test-Path $python)) { throw "não achei $python" }

# Três horários por dia, em minutos fora do :00 e do :30 de propósito — horário
# redondo é onde todo agendador do mundo se acumula.
$gatilhos = @(
  (New-ScheduledTaskTrigger -Daily -At '08:07'),
  (New-ScheduledTaskTrigger -Daily -At '14:37'),
  (New-ScheduledTaskTrigger -Daily -At '20:47')
)

$acao = New-ScheduledTaskAction -Execute $python -Argument "`"$script`"" `
        -WorkingDirectory 'C:\Projects\semee-site\automacao'

$config = New-ScheduledTaskSettingsSet -StartWhenAvailable `
          -DontStopIfGoingOnBatteries -AllowStartIfOnBatteries `
          -ExecutionTimeLimit (New-TimeSpan -Minutes 40) `
          -MultipleInstances IgnoreNew

Unregister-ScheduledTask -TaskName $nome -Confirm:$false -ErrorAction SilentlyContinue

Register-ScheduledTask -TaskName $nome -Action $acao -Trigger $gatilhos `
  -Settings $config -Description 'Verifica o grupo do WhatsApp da SEMEE 3x ao dia e publica notícia nova no semee.tech (playbook em automacao/PLAYBOOK-NOTICIAS.md).' | Out-Null

Get-ScheduledTask -TaskName $nome | Select-Object TaskName, State
(Get-ScheduledTask -TaskName $nome).Triggers | Select-Object StartBoundary
Write-Output "Log: C:\Projects\semee-site\automacao\logs\"
Write-Output "Teste sem publicar: python `"$script`" --dry-run"
