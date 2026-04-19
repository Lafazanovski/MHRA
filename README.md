# MHRA — Macedonian Human Resources Association
# МАЧР - Македонска асоцијација за човечки ресурси

Веб апликација за Македонска Асоцијација за Човечки Ресурси, изградена со Next.js и TypeScript.

🔗 **Live Demo:** https://mhra-project-nu.vercel.app

---

## Технологии

- **Next.js** (Pages Router)
- **TypeScript**
- **React**
- **Firebase Authentication**
- **CSS** (модуларен, BEM методологија)
- **Font Awesome** (икони)
- **Vercel** (хостирање)

---

## Структура на проектот

```
src/
  components/       ← React компоненти
  pages/            ← Страни и API Routes
  data/             ← Mock податоци
  types/            ← TypeScript интерфејси
  utils/            ← Помошни функции
  context/          ← Language Context
  lib/              ← Firebase конфигурација
  styles/           ← CSS стилови
public/
  images/           ← Слики
  locales/          ← Преводи (МК/ЕН)
```

---

## Страни

| Страна | Опис |
|--------|------|
| `/` | Почетна страна |
| `/blogs` | Листа на блогови |
| `/blogs/[id]` | Единечен блог (динамичка рута) |
| `/eventListing` | Листа на настани |
| `/events/[id]` | Единечен настан (динамичка рута) |
| `/conferencePage` | Годишна конференција |
| `/aboutUs` | За нас |
| `/signUp` | Регистрација / Логирање |
| `/userDashboard` | Кориснички профил |

---

## API Routes

| Рута | Опис |
|------|------|
| `/api/blogs` | Враќа рандом блогови или блог по ID |
| `/api/events` | Враќа рандом настани или настан по ID |
| `/api/members` | Враќа членови на одборот |

---

## Клучни функционалности

### Mock Data систем
Апликацијата користи локални податоци (`src/data/`) кои се сервираат преку Next.js API Routes. Секој пат кога се вчитува страна, се прикажуваат рандом избрани содржини.

### Динамички рути
Со клик на картичка, корисникот се пренасочува на `/blogs/[id]` или `/events/[id]` каде се прикажуваат деталите за избраната содржина.

### Firebase Authentication
- Регистрација со Email и лозинка
- Логирање со Email и лозинка
- Логирање со Google
- Одјавување


---

## Автор

**Kristijan Lafazanovski** — FE23
Brainster Front-End Development Academy
