# Trabalho Segurança e Auditoria de Sistemas
# Criptografia de Cesar

## Objetivo
Desenvolver uma ferramenta de criptografia e descriptografia de mensagens utilizando o método da cifra de César.

## Metodologia
A cifra de César é um método de criptografia por substituição monoalfabética, sendo um dos sistemas de codificação mais antigos e básicos. A técnica consiste em deslocar cada letra do texto original um número fixo de posições no alfabeto, de acordo com uma chave predefinida.

## Funcionamento

1. **Escolha da chave**: Define-se um número inteiro positivo como a chave, representando a quantidade de posições que cada letra será deslocada no alfabeto. Por exemplo, com a chave 3, a letra 'A' será substituída por 'D', 'B' por 'E', etc.

2. **Conversão para valores numéricos**: Cada letra do texto original é associada a um valor numérico correspondente à sua posição no alfabeto. Por exemplo, 'A' = 0, 'B' = 1, e assim por diante.

3. **Aplicação da chave**: O valor numérico de cada letra é somado à chave, resultando em um novo valor. Se o valor ultrapassar o tamanho do alfabeto, é realizada uma operação modular para garantir que o resultado permaneça dentro do intervalo alfabético.

4. **Conversão de volta para caracteres**: O valor numérico resultante é convertido de volta para a letra correspondente no alfabeto cifrado.

