#Em muitas linguagens, um if espera estritamente um valor booleano (True ou False). Python é mais relaxado e "filosófico": ele aceita qualquer objeto e decide se ele "parece" verdadeiro ou falso.

#O Clube dos "Falsy" (Falsos)
#Por padrão, quase tudo em Python é verdadeiro (Truthy), exceto um pequeno grupo de valores vazios ou nulos. Se você colocar qualquer um destes num if, o código não entra no bloco:

#Constantes: None e False.

#Zeros numéricos: 0, 0.0, 0j.

#Sequências/Coleções vazias: "" (string vazia), [] (lista vazia), () (tupla vazia), {} (dicionário vazio), set().

#O Segredo Oculto: Objetos Personalizados
#Aqui está o detalhe que pouca gente conhece: você controla a verdade dos seus objetos.

#Quando você cria uma classe, as instâncias dela são True por padrão. Mas você pode mudar isso implementando dois "métodos mágicos" (dunder methods):

#__bool__(self): O Python chama isso primeiro. Se retornar False, o objeto é Falsy.

#__len__(self): Se __bool__ não existir, o Python tenta chamar esse. Se retornar 0, o objeto é considerado Falsy.

class Carrinho: 
    def __init__(self, itens): 
        self.itens = itens

    def __len__(self):
        return len(self.itens)    

meu_carrinho = Carrinho([])

# Isso não imprime nada porque len é 0 (Falsy == Não é bem falso, mas é falso)
if meu_carrinho:
    print("Vamos para o caixa!")
else:
    print("Carrinho vazio, continue comprando.")        