## SDD e TDD: Do Blueprint de Arquitetura ao Código Blindado

Se no mundo dos Agentes de IA nós falamos sobre tomadas (MCP) e talentos (Skills), no dia a dia do desenvolvimento de software tradicional nós precisamos de duas coisas fundamentais antes de digitar a primeira linha de código de produção: **um plano estruturado** e **a garantia de que o código funciona**.

É aqui que entram o **SDD (Software/System Design Document)** e o **TDD (Test-Driven Development)**. Eles atuam em frentes diferentes, mas complementares: o SDD olha para o macro (arquitetura e design), enquanto o TDD cuida do micro (implementação e qualidade).

---

## 1. O que é SDD (Software Design Document)?

O **SDD** (Documento de Design de Software ou Arquitetura de Sistema) é o blueprint, o mapa arquitetural do que será construído. Antes de sair criando tabelas no banco de dados ou subindo microsserviços, o engenheiro ou arquiteto escreve o SDD para alinhar o _como_ o problema será resolvido tecnicamente.

### Por que o SDD é vital?

- **Alinhamento Técnico:** Garante que todo o time (e outras equipes afetadas) concorde com a abordagem antes de gastar tempo codificando.
    
- **Evita Refatorações Caras:** Descobrir um erro de arquitetura no papel custa zero centavos; descobrir em produção custa caro.
    
- **Documentação Viva:** Serve como o histórico de decisões de engenharia do sistema.
    

### Exemplo Prático de um SDD (Snippet)

**Título:** SDD-2026-09: Sistema de Notificações em Tempo Real

**Autor:** Engenharia de Plataforma

**Status:** Em Revisão

---

#### 1. Objetivos e Escopo

Criar um serviço centralizado para envio de notificações (Push e E-mail) que suporte um pico de 5.000 requisições por segundo.

#### 2. Arquitetura Proposta

O sistema será composto por um microsserviço em Go, utilizando **Redis Pub/Sub** para mensageria interna rápida e **PostgreSQL** para histórico de envios.

```
[Cliente API] ──(HTTP POST)──> [Serviço Go] ──> [Redis Pub/Sub] ──> [Workers de Envio]
```

#### 3. Modelo de Dados (Postgres)

Tabela: `notifications`

- `id` (UUID, Primary Key)
    
- `user_id` (UUID, Indexed)
    
- `content` (TEXT)
    
- `status` (VARCHAR: 'pending', 'sent', 'failed')
    

---

## 2. O que é TDD (Test-Driven Development)?

Enquanto o SDD definiu que teremos um serviço de notificações, o **TDD (Desenvolvimento Orientado a Testes)** é a técnica utilizada pelo desenvolvedor na hora de escrever o código desse serviço.

No TDD, a dinâmica é invertida: **você escreve o teste unitário antes de escrever o código da funcionalidade.** Ele funciona em um ciclo estrito e viciante conhecido como **Red-Green-Refactor**:

1. **🔴 RED:** Escreva um teste para uma função que ainda não existe. Execute o teste e veja ele falhar.
    
2. **🟢 GREEN:** Escreva o código mínimo necessário para fazer o teste passar.
    
3. **🔵 REFACTOR:** Melhore o código (remova duplicidades, melhore nomes), garantindo que o teste continue passando.
    

### Por que o TDD é vital?

- **Código Blindado:** Você ganha uma suite de testes que te dá segurança para mudar o código no futuro sem medo de quebrar nada.
    
- **Design Mais Limpo:** Como você pensa no teste primeiro, suas funções tendem a ser menores, mais focadas e menos acopladas.
    
- **Fim do "Na minha máquina funciona":** O comportamento esperado está documentado e automatizado no teste.
    

### Exemplo Prático de TDD (Em Python)

Imagine que precisamos criar a regra de negócio que valida se uma notificação pode ser enviada (ela não pode ter conteúdo vazio).

#### Passo 1: Escrever o Teste (Red 🔴)

O código abaixo vai falhar porque a função `validar_notificacao` sequer existe.

Python

```
# test_validador.py
import pytest
from validador import validar_notificacao

def test_deve_retornar_falso_se_conteudo_for_vazio():
    # Cenário: Conteúdo vazio
    conteudo = ""
    
    # Ação
    resultado = validar_notificacao(conteudo)
    
    # Verificação
    assert resultado is False
```

_Resultado ao rodar o teste: `ModuleNotFoundError: No module named 'validador'`._

#### Passo 2: Escrever o código mínimo (Green 🟢)

Criamos o arquivo e colocamos o mínimo para o teste passar.

Python

```
# validador.py

def validar_notificacao(conteudo: str) -> bool:
    if conteudo == "":
        return False
    return True
```

_Resultado ao rodar o teste: `PASSED` (Verde!)._

#### Passo 3: Refatorar (Refactor 🔵)

Agora podemos deixar o código mais elegante sabendo que, se errarmos, o teste nos avisa.

Python

```
# validador.py (Refatorado)

def validar_notificacao(conteudo: str) -> bool:
    # Strings vazias em Python são avaliadas como False
    return bool(conteudo and conteudo.strip())
```

_Rodamos o teste novamente: Continua `PASSED`._

---

## Como eles se conectam?

Eles operam em escalas de tempo e escopos diferentes, mas se alimentam mutuamente:

- O **SDD** te dá a visão macro: _"Precisamos de um validador de payloads no formato JSON X antes de salvar no banco Y."_
    
- O **TDD** pega essa diretriz do SDD e executa no micro: o desenvolvedor senta, escreve os testes para os cenários do JSON X, faz falhar, implementa a lógica e refatora.
    

Sem o SDD, o TDD pode te fazer construir de forma perfeita e testada a ferramenta errada. Sem o TDD, o seu lindo design de SDD pode se transformar em um código frágil, cheio de bugs e impossível de manter. Juntos, eles garantem arquitetura robusta e código confiável.