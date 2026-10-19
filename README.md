# Barbearia - Brutus Barbershop

Website institucional da Barbearia Brutus Barbershop, desenvolvido com React, Vite, Tailwind CSS e TypeScript.

---

## Soluções Aplicadas para o GitHub e GitHub Actions

### 1. Correção do erro no GitHub Actions (`Dependencies lock file is not found`)
- **Causa**: O passo `actions/setup-node@v4` estava configurado com `cache: 'npm'`, o qual exige a presença obrigatória do arquivo `package-lock.json`. Como o arquivo de lock não estava gerado nem incluído no repositório, o GitHub Actions abortava com o erro:
  `Error: Dependencies lock file is not found in /home/runner/work/...`
- **Conflito de dependências resolvido**: No `package.json`, havia uma declaração antiga de `"esbuild": "^0.25.0"` em devDependencies que conflitava com a versão mais recente exigida pelo Vite 8 (`^0.27.0 || ^0.28.0`). Esse conflito impedia o `npm` de gerar o arquivo de lock de forma limpa.
- **Solução implementada**:
  1. Removemos a dependência conflitante redundante de `esbuild` do `package.json` (o Vite já gerencia sua própria versão do esbuild internamente).
  2. Geramos um `package-lock.json` íntegro e consistente com todas as dependências do projeto.
  3. No workflow `.github/workflows/deploy.yml`, definimos explicitamente `cache-dependency-path: 'package-lock.json'` e atualizamos o comando de instalação para `npm ci`, garantindo builds rápidos, seguros e determinísticos na esteira de CI.

### 2. Correção da tela branca (*blank screen*)
- **Causa**: O caminho padrão absoluto do Vite (`/assets/...`) causava erro 404 em URLs de subdiretório do GitHub Pages (`https://usuario.github.io/repositorio/`).
- **Solução**: Definido `base: './'` em `vite.config.ts`, tornando todas as referências a scripts e estilos relativas.

---

## Como Ativar a Publicação no GitHub Pages (Passo a Passo)

1. Envie todas as alterações para o seu repositório no GitHub (incluindo o arquivo `package-lock.json` e a pasta `.github/`):
   ```bash
   git add .
   git commit -m "Correção do deploy e inclusão do package-lock.json"
   git push origin main
   ```
2. Acesse o seu repositório no GitHub pelo navegador.
3. Clique na aba **Settings** (Configurações) no menu superior.
4. No menu lateral esquerdo, clique em **Pages**.
5. Em **Build and deployment** > **Source**, certifique-se de que está selecionado:
   - **GitHub Actions**.
6. Pronto! A aba **Actions** executará a esteira com sucesso e fornecerá o link ativo da barbearia.

---

## Comandos Disponíveis

- **`npm run dev`**: Inicia o servidor local de desenvolvimento na porta 3000.
- **`npm run build`**: Gera a versão otimizada para produção na pasta `dist/`.
- **`npm run preview`**: Visualiza localmente a versão compilada em `dist/`.
- **`npm run lint`**: Verifica a integridade dos tipos TypeScript.

---

## Informações do Estabelecimento

- **Nome**: Barbearia - Brutus Barbershop
- **Telefone / WhatsApp**: +55 66 9987-6380
- **Rota no Google Maps**: https://maps.app.goo.gl/J3BLhVqvatXLP7iV7
