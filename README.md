# Barbearia - Brutus Barbershop

Website institucional da Barbearia Brutus Barbershop, desenvolvido com React, Vite, Tailwind CSS e TypeScript.

---

## Motivo da Tela Branca ao Subir para o GitHub (e Como Foi Corrigido)

Se ao publicar o repositório no GitHub o site apresentou uma tela branca vazia (*blank screen*), as duas causas fundamentais identificadas foram:

1. **Caminho absoluto padrão de assets no Vite (`base: '/'` vs `base: './'`)**:
   - Por padrão, o Vite gera referências aos arquivos JavaScript e CSS como caminhos absolutos na raiz do domínio (`/assets/index-...js`).
   - Quando hospedado no **GitHub Pages**, o endereço do projeto fica em um subdiretório (ex: `https://seu-usuario.github.io/nome-do-repositorio/`).
   - Com o caminho absoluto, o navegador tentava carregar os arquivos em `https://seu-usuario.github.io/assets/...`, gerando **Erro 404 (Not Found)**. Sem carregar o script JavaScript, o React não iniciava e a página ficava totalmente branca.
   - **Correção aplicada**: Adicionamos `base: './'` em `vite.config.ts`. Dessa forma, todos os assets compilados utilizam caminhos relativos (`./assets/...`), funcionando perfeitamente em qualquer repositório, subpasta ou domínio personalizado.

2. **Publicação dos arquivos fonte sem compilação prévia**:
   - Se o GitHub Pages for configurado para servir a branch `main` diretamente na pasta `/` (raiz), ele entrega o `index.html` original de desenvolvimento, o qual referencia `<script src="/src/main.tsx"></script>`.
   - Navegadores de internet não executam arquivos TypeScript (`.tsx`) puros sem que eles passem pelo build do Vite. Isso gera um erro de tipo MIME/módulo no console e impede a renderização.
   - **Correção aplicada**: Criamos o fluxo automatizado do GitHub Actions em `.github/workflows/deploy.yml`, que instala as dependências, executa `npm run build` e publica a pasta compilada `dist/`.

---

## Como Ativar a Publicação no GitHub Pages (Passo a Passo)

Para que seu site funcione automaticamente no GitHub Pages:

1. Acesse o seu repositório no GitHub.
2. Clique na aba **Settings** (Configurações) no topo.
3. No menu lateral esquerdo, clique em **Pages**.
4. Em **Build and deployment** > **Source**, selecione a opção:
   - **GitHub Actions** *(Recomendado - nosso arquivo `.github/workflows/deploy.yml` já está pronto)*.
5. Pronto! A cada novo `git push` para a branch `main` ou `master`, o GitHub compilará o projeto e publicará o site com URL pública ativa.

---

## Comandos Disponíveis

- **`npm run dev`**: Inicia o servidor local de desenvolvimento na porta 3000.
- **`npm run build`**: Gera a versão otimizada para produção na pasta `dist/`.
- **`npm run preview`**: Visualiza localmente a versão compilada em `dist/`.
- **`npm run lint`**: Verifica a tipagem estrita com TypeScript.

---

## Informações do Estabelecimento

- **Nome**: Barbearia - Brutus Barbershop
- **Telefone / WhatsApp**: +55 66 9987-6380
- **Rota no Google Maps**: https://maps.app.goo.gl/J3BLhVqvatXLP7iV7
