## O que é um Runbook? O Guia Introdutório com Exemplos Práticos

Imagine a seguinte cena: é domingo, 3 horas da manhã, e o principal servidor da sua empresa sai do ar. O engenheiro sênior que conhece todo o sistema está viajando e sem sinal de celular. Quem está de plantão precisa resolver o problema rápido, mas não sabe por onde começar.

É exatamente aqui que entra o **Runbook**.

Em termos simples, um runbook é um **manual de instruções detalhado** que descreve como executar uma tarefa operacional ou resolver um problema específico dentro de um ambiente de TI. Ele funciona como uma "receita de bolo" para engenheiros de DevOps, administradores de sistemas e equipes de suporte.

---

## Por que os Runbooks são vitais?

A existência de bons runbooks separa as equipes eficientes daquelas que vivem em constante estado de caos ("apagando incêndios"). Os principais benefícios são:

- **Redução do Tempo de Resposta (MTTR):** Não há perda de tempo adivinhando o que fazer; basta seguir o passo a passo.
    
- **Consistência:** Garante que a tarefa seja feita da mesma forma, independentemente de quem a esteja executando.
    
- **Minimização de Erros Humanos:** Sob pressão (como um sistema fora do ar), é fácil esquecer um comando. O runbook elimina essa futilidade.
    
- **Facilidade no Onboarding:** Novos membros da equipe podem executar tarefas complexas logo nos primeiros dias.
    

> 💡 **Runbook vs. Playbook:** Embora os termos sejam parecidos, há uma sutil diferença. O **Playbook** é mais amplo e estratégico (ex: "Como responder a um ataque cibernético"). O **Runbook** é a execução técnica e focada (ex: "Como rotacionar as chaves de criptografia após uma invasão").

---

## Anatomia de um Bom Runbook

Para ser útil, um runbook não pode ser um texto confuso. Ele precisa ser direto e conter:

1. **Objetivo:** O que este documento resolve.
    
2. **Pré-requisitos:** Quais acessos, permissões ou ferramentas são necessários.
    
3. **Passo a Passo Clear:** Os comandos exatos e as telas que o operador verá.
    
4. **Validação:** Como ter certeza de que o procedimento funcionou.
    
5. **Plano de Escala:** O que fazer se o passo a passo falhar (quem chamar?).
    

---

## Exemplos Práticos de Runbooks

Abaixo, veja dois exemplos práticos de como estruturar um runbook. O primeiro é focado em **infraestrutura/incidentes** e o segundo em **rotinas operacionais**.

### Exemplo 1: Runbook de Incidente (Serviço Web Travado)

**ID:** RB-042

**Título:** Reinicialização do Serviço de API Principal (Nginx/Node.js)

**Autor:** Equipe de DevOps

**Última Atualização:** Março de 2026

---

#### 1. Sintomas do Problema

- Alerta no monitoramento: "API Gateway 502 Bad Gateway".
    
- Usuários recebendo erro de timeout no aplicativo.
    

#### 2. Pré-requisitos

- Acesso SSH ao servidor de produção.
    
- Permissões de `sudo` no servidor.
    

#### 3. Procedimento Passo a Passo

**Passo 1:** Acesse o servidor afetado via terminal:

Bash

```
ssh usuario@api-server-prod-01
```

**Passo 2:** Verifique o status do serviço Node.js (PM2):

Bash

```
sudo pm2 status
```

_Se o status estiver "errored" ou "stopped", vá para o Passo 3._

**Passo 3:** Reinicie o serviço da API:

Bash

```
sudo pm2 restart api-principal
```

**Passo 4:** Verifique se o servidor web Nginx está rodando normalmente:

Bash

```
sudo systemctl status nginx
```

_Se o Nginx estiver parado, inicie-o com:_ `sudo systemctl start nginx`

#### 4. Validação

Execute o comando abaixo para testar se a API voltou a responder com status 200 (Sucesso):

Bash

```
curl -I https://api.suaempresa.com/healthcheck
```

_A resposta esperada deve conter `HTTP/2 200`._

#### 5. Plano de Escala

Se após o Passo 3 a API continuar caindo em menos de 2 minutos, mude o tráfego para o servidor de contingência e acione o Engenheiro de Backend de Plantão no canal `#urgencias-backend` do Slack.

---

### Exemplo 2: Runbook de Rotina (Backup de Banco de Dados)

**ID:** RB-015

**Título:** Backup Manual e Verificação do Banco de Dados PostgreSQL

**Objetivo:** Executar backup preventivo antes de atualizações de sistema.

---

#### 1. Pré-requisitos

- Instalação do `pg_dump` local ou na máquina de salto.
    
- Credenciais do usuário `admin_backup`.
    

#### 2. Procedimento Passo a Passo

**Passo 1:** Crie a pasta onde o backup será salvo temporariamente:

Bash

```
mkdir -p /tmp/backups_preventivos/
```

**Passo 2:** Execute o comando de dump do banco (substitua `NOME_DO_BANCO` pelo banco real):

Bash

```
pg_dump -h db-prod.suaempresa.com -U admin_backup -F c -b -v -f /tmp/backups_preventivos/db_backup_$(date +%Y%m%d).dump NOME_DO_BANCO
```

**Passo 3:** Envie o arquivo gerado para o armazenamento seguro no Amazon S3:

Bash

```
aws s3 cp /tmp/backups_preventivos/db_backup_*.dump s3://bucket-backups-seguros/manuais/
```

**Passo 4:** Limpe os arquivos temporários locais para não encher o disco:

Bash

```
rm -rf /tmp/backups_preventivos/
```

#### 3. Validação

Acesse o console da AWS S3 e garanta que o arquivo do dia de hoje está listado com tamanho maior que 0 bytes.

---

## O Futuro dos Runbooks: A Automação

No início, os runbooks eram apenas arquivos de texto ou páginas no Wiki/Confluence (Runbooks Manuais). Hoje, o mercado se moveu para **Runbooks Automatizados** ou _Executable Runbooks_.

Ferramentas como Ansible, Terraform, Rundeck ou até scripts em Python transformam esses passos em código. Em vez de um humano copiar e colar comandos, um sistema aperta um botão (ou reage a um alerta) e executa o runbook sozinho.

Ter a cultura de documentar seus processos em runbooks é o primeiro passo para garantir que sua operação seja madura, resiliente e, acima de tudo, escalável.