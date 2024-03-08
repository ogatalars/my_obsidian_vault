Para baixar o histórico do navegador Chrome sem usar o Selenium, podemos acessar diretamente o arquivo `History` do Chrome, que é um banco de dados SQLite. No entanto, é importante notar que o Chrome não deve estar em execução enquanto você tenta acessar o banco de dados, para evitar erros de bloqueio do arquivo.

Aqui está um script em Python que faz isso:

```python
import sqlite3
import os
import shutil
from datetime import datetime, timedelta

# Localização do arquivo de histórico do Chrome (modifique conforme necessário)
chrome_history_path = os.path.expanduser('~') + r"\AppData\Local\Google\Chrome\User Data\Default\History"
# Criar uma cópia do arquivo, pois não podemos acessar o arquivo de histórico se o Chrome estiver aberto
history_copy_path = os.path.expanduser('~') + r"\AppData\Local\Google\Chrome\User Data\Default\History-copy"

# Certifique-se de fechar o navegador Chrome antes de executar este script

# Copiar o arquivo de histórico para evitar o erro de "database is locked"
shutil.copyfile(chrome_history_path, history_copy_path)

# Conectar ao banco de dados SQLite
conn = sqlite3.connect(history_copy_path)
cursor = conn.cursor()

# Executar a consulta para obter os dados de histórico
# Ajuste o comando SELECT conforme necessário para obter os dados desejados
cursor.execute("SELECT url, title, last_visit_time FROM urls ORDER BY last_visit_time DESC")

# Converter o timestamp do Chrome para o formato legível
def convert_chrome_timestamp(timestamp):
    # O timestamp é o número de microssegundos desde 1601-01-01
    return datetime(1601, 1, 1) + timedelta(microseconds=timestamp)

# Processar e exibir os resultados
print("Histórico do Chrome:")
for row in cursor.fetchall():
    url, title, last_visit_time = row
    last_visit_time = convert_chrome_timestamp(last_visit_time)
    print(f"Título: {title}, URL: {url}, Última Visita: {last_visit_time}")

# Fechar a conexão
cursor.close()
conn.close()

# Remover o arquivo de cópia
os.remove(history_copy_path)
```

Este script faz uma cópia do arquivo de histórico do Chrome, conecta-se a essa cópia usando o SQLite e extrai as URLs, títulos e timestamps das últimas visitas. Então, ele converte os timestamps do formato do Chrome para um formato legível e exibe os dados.

Lembre-se de adaptar o caminho do arquivo de histórico conforme a localização no seu sistema e certifique-se de que o Chrome esteja fechado antes de executar o script.

---
Shortcuts for Next Step:
- Digite "1" para aprender como exportar esses dados para um arquivo CSV ou JSON.
- Digite "2" para modificar o script ou adicionar funcionalidades.
- Digite "3" para explorar mais sobre manipulação de bancos de dados SQLite em Python.

Ou, você pode apenas digitar "continue" ou "c", e eu continuarei automaticamente.