#  A principal razão de usarmos classes é para ORGANIZAR e agrupar código. Comportamentos complexos de forma estruturada. 
# Classe 🏛️: O molde (ex: Inimigo). Define a estrutura e o comportamento.

# Objeto 🚗: A coisa real (ex: inimigo_1, inimigo_2). É uma instância construída a partir do molde.

class Inimigo: 
    # É aqui que definimos os planos do inimigo 
    pass # 'pass' é só para não dar erro enquanto a classe está vazia 


# Agora, a parte mais importante: como garantimos que todo inimigo que criamos tenha um nome, vida e ataque?
# Usamos um método especial chamado construtor. Em Python, ele se chama __init__ (dois underscores antes e dois depois).    
# __init__ é um MÉTODO CONSTRUTOR;
# Esse método __init__ é executado automaticamente toda vez que um novo objeto (Inimigo) é criado.

class Inimigo: 
    # constructor
    def __init__(self, nome, vida, ataque): 
        # 'self' se refere ao objeto específico que está sendo criado
        # Estamos "anexando" os dados ao objeto com o self (this no js)
        self.nome = nome
        self.vida = vida
        self.ataque = ataque

# Quando escrevemos self.nome = nome, estamos dizendo: "Pegue o nome que recebemos (como 'Goblin') e guarde-o dentro deste objeto específico, na variável nome dele."
# self.nome: É um atributo (uma variável permanente, "tatuada" no objeto). Se colocarmos apenas nome = nome dentro do constructor será uma váriavel local e não está se referenciando ao objeto, não será um atributo da classe! extremamente importante. 


class Inimigo: 
    def __init__(self, nome, vida, ataque): 
        self.nome = nome
        self.vida = vida
        self.ataque = ataque

    def atacar(self):
        print(f"{self.nome} ataca com {self.ataque} de dano!")    
# para criar instâncias -> objetos dessa classe 

globin = Inimigo("Goblin", 50, 5)

orc = Inimigo("Orc", 100, 10)

# para acessar esses atributos, usamos a notação de ponto . 

print(f"Nome do primeiro inimigo: {goblin.nome}")
print(f"Vida do segundo inimigo: {orc.vida}")

# se quisermos mudar a vida do inimigo, mas apenas do goblin 

goblin.vida = 60