# ☁️ AWS Dev — Arquitetura e Automação de Serviços na Nuvem

## 📌 Descrição

📦 Este repositório reúne projetos, templates e automações voltadas ao desenvolvimento e à arquitetura de aplicações cloud-native utilizando **serviços da AWS**. A ênfase está em construir aplicações modernas, resilientes e escaláveis usando **Lambda, API Gateway, DynamoDB, S3, Step Functions**, entre outros.

> ⚠️ **Este projeto está em desenvolvimento.** Algumas soluções ainda estão sendo testadas ou ajustadas.

---

🔗 [![Status](https://img.shields.io/badge/AWS-Site_Estático_Hospedado_em_S3-yellow?style=for-the-badge)](./AWS-lab-S3)

<p>Trata-se de um site estático, o que significa que ele foi construído para ser rápido, seguro e de fácil acesso, utilizando o serviço de armazenamento S3 — ideal para oferecer uma experiência confiável aos nossos convidados.</p>

---

🔗 [![Tecnologia](https://img.shields.io/badge/AWS-SAM_App-orange?style=for-the-badge)](./AWSSamTestApp)

<p>Este projeto demonstra uma aplicação serverless construída com o AWS SAM (Serverless Application Model), que utiliza funções Lambda e uma API Gateway para funcionar. Todo o código-fonte, testes e eventos simulados estão organizados em pastas específicas, e a infraestrutura é definida no arquivo template.yaml. A implantação é feita com o SAM CLI, que permite construir, testar e implantar a aplicação localmente usando Docker, proporcionando um ambiente muito próximo ao da AWS. É uma solução moderna e escalável, ideal para aplicações rápidas, sem servidores tradicionais.</p>

---

🔗 [![Linguagem](https://img.shields.io/badge/Vue-Python_App-blue?style=for-the-badge)](./ca-python-serverless)

<p>Esta aplicação serverless combina o poder do Vue.js no front-end com a simplicidade do Python no back-end. A interface é um site estático hospedado no Amazon S3, oferecendo uma experiência rápida e interativa para o usuário. As funcionalidades dinâmicas — como manipulação de dados e lógica de negócios — são executadas por funções Lambda escritas em Python, acessadas por meio do API Gateway. Essa arquitetura elimina a necessidade de servidores tradicionais, garantindo escalabilidade, alta disponibilidade e baixo custo operacional.</p>

---

🔗 [![Linguagem](https://img.shields.io/badge/React-Python_App-magenta?style=for-the-badge)](./catalisty-react-java-app)

<p>Esta aplicação "To Do" é uma solução serverless moderna que combina um front-end em React com TypeScript, hospedado no Amazon S3 com distribuição via CloudFront, e um back-end em Python via AWS Lambda, exposto por uma API REST no API Gateway e persistência de dados no Amazon DynamoDB. A infraestrutura é totalmente gerenciada pelo AWS CDK, permitindo fácil manutenção e escalabilidade. Todo o ciclo de vida da aplicação — desde testes até deploy — é orquestrado automaticamente via Amazon CodeCatalyst, garantindo qualidade e entrega contínua.</p>

---

🔗 [![Linguagem](https://img.shields.io/badge/AWS-Java_Serveless-yellow?style=for-the-badge)](./my-projet-aws)

<p>Este projeto em Java utiliza o AWS Cloud Development Kit (CDK) com Maven para definir e provisionar infraestrutura na AWS como código. Ele serve como base para criar stacks de recursos em nuvem de forma programática, aproveitando os recursos do CDK para compilar, testar e implantar aplicações via comandos como cdk synth e cdk deploy. Ideal para desenvolvedores Java que desejam controlar sua infraestrutura usando uma abordagem moderna, robusta e integrada ao ecossistema AWS.</p>

---

🔗 [![Licença](https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge)](LICENSE)



## 🚀 Tecnologias Utilizadas

- ☁️ **AWS Lambda, API Gateway, DynamoDB, S3**
- 🔧 **AWS CloudFormation & CDK (Infra como Código)**
- 🐍 **Python 3.10+** / ☕ **Java 17+**
- ⚙️ **Amazon EventBridge, Step Functions, IAM**
- 📦 **AWS SAM / Serverless Framework**
- 📓 **Jupyter Notebooks para prototipagem**

---

## 📁 Estrutura do Projeto

```bash
aws-dev/
├── infra/
│   ├── templates/
│   │   └── lambda-apigw-dynamodb.yaml
│   └── cdk/
├── services/
│   ├── lambda-python/
│   └── lambda-java/
├── automation/
│   ├── step-functions/
│   └── dynamodb-streams/
├── notebooks/
│   └── prototipagem-eventbridge.ipynb
├── requirements.txt
└── README.md
```

---

### 🧪 Casos e Aplicações Práticas
- ✅ API REST com Lambda + API Gateway + DynamoDB
- ✅ Automação de tarefas com Step Functions e EventBridge
- ✅ Processamento de eventos com DynamoDB Streams
- ✅ Uploads assíncronos com S3 + Lambda
- ✅ Infraestrutura como Código com CDK e CloudFormation
- ✅ Criação de pipelines CI/CD com CodePipeline e GitHub

---

### 🛠️ Instalação & Execução

```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/aws-dev.git
cd aws-dev

# Instalar dependências para Python
pip install -r requirements.txt

# Rodar local com SAM (exemplo Lambda)
sam local invoke "HelloWorldFunction" -e events/event.json
```

---

### ✅ Pré-requisitos
- Conta AWS com permissões adequadas (IAM)
- AWS CLI configurado (aws configure)
- Python 3.10+ e/ou Java 17+
- Node.js para CDK
- Ferramentas essenciais: AWS SAM CLI, Docker, VS Code

---

### 🛣️ Em Desenvolvimento
 - Templates CDK para sistemas distribuídos
 - Integração com Amazon SQS e SNS
 - Deploy contínuo com CodePipeline + GitHub Actions
 - Painel de observabilidade com CloudWatch Logs + Dashboards
 - Arquitetura de microserviços com EventBridge

---

### 🤝 Contribuindo
- Contribuições são sempre bem-vindas!
- Abra uma issue ou envie um pull request com sugestões de melhoria ou novos exemplos.

---

### 📄 Licença
- Este projeto está licenciado sob a Licença MIT. Consulte LICENSE para mais detalhes.

---

- ## Return
  [![Main Page](https://img.shields.io/badge/Main-Page?style=for-the-badge&logo=github&logoColor=white)](https://github.com/alfecjo)
