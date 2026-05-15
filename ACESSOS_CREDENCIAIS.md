# Thompson Seguros — Acessos & Credenciais
## Para: Sócia - Administração do Site

---

## 🔑 ACESSOS PRINCIPAIS

### 1. GITHUB (Repositório do Código)
**URL**: https://github.com/thompsonsegurossite-ai/thompson-seguros  
**Tipo**: Privado  
**Função**: Código-fonte, histórico de mudanças, backup

- [ ] Solicitar convite para: [email da sócia]
- [ ] Após aceitar: você tem acesso total ao código

**O que fazer lá**:
- Ver histórico de todas as mudanças
- Clonar código localmente se precisar
- Gerenciar branches (opcional)

---

### 2. VERCEL (Hosting & Deploy)
**URL**: https://vercel.com  
**Projeto**: https://vercel.com/projects/thompson-seguros  
**App**: https://thompson-seguros.vercel.app

**Credenciais:**
- Email: [seu email]
- Senha: [sua senha]

**Função**:
- Dashboard com logs de deploy
- Analytics do site (visitantes, performance)
- Variáveis de ambiente (.env)
- Histórico de deploys

**O que fazer lá**:
- Acompanhar deploy automático (2-3 min após push no GitHub)
- Ver se houve erros no build
- Ver tráfego/performance do site

---

### 3. RESEND (Email Transacional)
**URL**: https://resend.com  
**Status**: Conta criada / Pendente criar

**Função**:
- Enviar emails de confirmação do formulário
- Rastreamento de emails (abertos, clicados)

**Próximos passos**:
- [ ] Criar conta Resend (https://resend.com)
- [ ] Confirmar domínio thompson-seguros.com.br
- [ ] Copiar API key → adicionar em Vercel
- [ ] Testar envio

**Plano**: Gratuito (até 100 emails/dia) = $0

---

### 4. HUGGY (CRM & WhatsApp)
**URL**: https://huggy.com  
**Status**: Já usando (equipe tem acesso)

**Função**:
- Receber leads do formulário site
- Gerenciar atendimento via WhatsApp
- Histórico de conversas

**Novo com o site**:
- Leads chegam automáticos do formulário
- Sem trabalho manual
- Operadores veem: nome, email, tel, contexto

**Próximos passos**:
- [ ] Admin Huggy fornecer:
  - API Key
  - Team ID
  - URL da API
- [ ] Adicionar em Vercel (.env)
- [ ] Testar primeira lead

---

## 🌐 SITE EM PRODUÇÃO

**URL Principal**: https://thompson-seguros.vercel.app  
**Domínio Customizado**: https://thompson-seguros.com.br (se tiver)

**Status**: ✅ LIVE

---

## 📋 VARIÁVEIS DE AMBIENTE (.env)

**Localização**: Vercel Dashboard → Settings → Environment Variables

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxx
HUGGY_API_KEY=xxxxxxxxxxxxx
HUGGY_API_URL=https://api.huggy.com.br
HUGGY_TEAM_ID=xxxxx
THOMPSON_EMAIL=atendimento@thompsonseguros.com.br
```

**Quem tem acesso**: Você (após convite GitHub)

---

## 🔄 FLUXO DE ALTERAÇÕES

### Para alterar o site:

```
1. Você avisa (email/WhatsApp)
   ↓
2. Desenvolvedor clona repositório
   ↓
3. Faz a alteração (arquivo X, linha Y)
   ↓
4. Testa localmente (npm run dev)
   ↓
5. Faz commit descritivo (git commit -m "...")
   ↓
6. Push para GitHub (git push)
   ↓
7. Vercel detecta
   ↓
8. Redeploya site automaticamente (2-3 min)
   ↓
9. ✅ LIVE (você recebe notificação por email)
```

**Tempo**: 15-30 min para alterar texto/imagem/cor

---

## 📊 DASHBOARD DE MONITORAMENTO

### Você deve acompanhar:

**No Vercel**:
- Logs de deploy (tudo rodando?)
- Performance (site rápido?)
- Erros (algum bug?)

**No Huggy**:
- Leads chegando (novos contatos?)
- Taxa de resposta (consultores atendem?)
- Conversão (quantos viram clientes?)

**No Resend** (depois):
- Emails enviados (todas as confirmações?)
- Taxa de entrega (chegar na inbox?)
- Aberturas (cliente lê?)

---

## 🚨 CONTATOS DE SUPORTE

| Problema | Contato |
|----------|---------|
| Deploy falhou | Vercel logs → GitHub issues → Dev |
| Email não chega | Resend dashboard → Dev |
| Lead não chega Huggy | Huggy logs → Dev |
| Texto/cor errado | Email → Dev → Fix → Live |
| Site fora do ar | Verificar Vercel status |

---

## 📝 CHECKLIST PRÉ-LANÇAMENTO

- [ ] GitHub: Sócia convidada + aceita convite
- [ ] Vercel: Sócia tem acesso ao dashboard
- [ ] Resend: Conta criada, API key em Vercel
- [ ] Huggy: Credenciais fornecidas, API key em Vercel
- [ ] Teste 1: Preencher formulário → email chega?
- [ ] Teste 2: Verifica se lead chega no Huggy?
- [ ] Teste 3: Redireciona para WhatsApp?
- [ ] Treinamento: Equipe de 4 operadores conhece novo fluxo?
- [ ] Go Live: Data confirmada?

---

## 💰 CUSTOS REAIS (Transparente)

| Serviço | Plano | Custo | Por quê |
|---------|-------|-------|---------|
| Vercel | Free | $0 | Hosting + deploy automático |
| Resend | Free | $0 | Até 100 emails/dia |
| GitHub | Free | $0 | Repositório privado |
| Huggy | Já tem | $0 | Integração sem custo extra |
| **TOTAL** | | **$0** | Sim, zero custo! |

---

## 📱 RESUMO PARA APRESENTAR

**Ao cliente diga:**
- "Site moderno, rápido e profissional"
- "Leads chegam automáticos no Huggy"
- "Sem custos de manutenção"
- "Qualquer alteração é feita em 15-30 minutos"
- "100% seguro e com backup automático"

---

## 🤝 PRÓXIMAS AÇÕES

1. **Hoje**: Apresentar ao cliente ✅
2. **Amanhã**: Cliente aprova?
3. **Próxima semana**: Configurar Huggy + Resend
4. **Seguinte**: Go live + treinar equipe

---

**Versão**: 1.0  
**Data**: 2026-05-14  
**Responsável**: Você + Sócia  
**Contato técnico**: [seu telefone/email]
