# Icon Brief — CyberPath Skills Section

## משימה
צור 6 אייקוני SVG לסקשן "כישורים שיישארו לכל החיים" באתר קורס הסייבר CyberPath.
האייקונים חייבים להרגיש כמשפחה אחת — אותו סגנון, אותה שפה ויזואלית, אותה רמת פירוט.

---

## סגנון ויזואלי

### העיקרון המרכזי
**Neon Line Art** — אייקונים מבוססי קו (stroke), לא fill. כאילו נחרטו בלוח מעגל.
חישבי על אסתטיקה של: circuit board + city blueprint + hacker terminal.
**לא** flat design גנרי. **לא** אייקוני Material/Font Awesome רגילים.

### שפה עיצובית
- קווים דקים עם זוהר נאון (SVG filter: glow/blur)
- פינות חדות (לא מעוגלות מדי) — תחושה טכנית/דיגיטלית
- פרטים קטנים שמגדירים את האייקון (למשל: מספר פורט, שורת קוד, נקודת רשת)
- אנימציה: **אין** — SVG סטטי בלבד

### מטפורה מרכזית של הקורס
הקורס משתמש במטפורת **"העיר הדיגיטלית"**:
- רשת מחשבים = עיר
- כתובת IP = כתובת בית
- פורט = דלת בבית
- שירות = עסק מאחורי הדלת
- Firewall = שומר בשער

השתמשי במטפורות האלה כדי להוסיף אופי ייחודי לכל אייקון.

---

## פלטת צבעים

```
--cyan:    #00e5ff   (צבע ראשי — אקסנט)
--purple:  #7b2fff   (סקשן כישורים — הצבע הדומיננטי של הסקשן)
--green:   #00ff9d   (הדגשות)
--bg:      #050d18   (רקע האתר — כחול כהה מאוד)
```

כל אייקון: stroke בצבע #c49dff (גוון בהיר של הסגול) עם glow filter בצבע #7b2fff.
נקודות הדגשה (אלמנטים קטנים, dots): צבע #00e5ff או #00ff9d.

---

## מפרט טכני

| פרמטר | ערך |
|--------|-----|
| פורמט | SVG |
| viewBox | `0 0 64 64` |
| רקע | transparent (אין rect רקע) |
| stroke-width ראשי | 1.5 |
| stroke-width משני | 1 |
| stroke-linecap | round |
| stroke-linejoin | round |
| fill | none (אלא אם מצוין אחרת) |
| glow filter | `<filter id="glow"><feGaussianBlur stdDeviation="1.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>` |

החל `filter="url(#glow)"` על כל אלמנט ראשי.

---

## 6 האייקונים הנדרשים

### 1. `network-map.svg` — מיפוי רשתות
**קונספט:** מפה של "העיר הדיגיטלית" — nodes (נקודות עיגול קטנות) מחוברות בקווים, כמו רשת עם ציר רחוב. רשת 3×3 נקודות עם קווים מחברים ביניהן. נקודה מרכזית גדולה יותר — "מרכז העיר". ליד נקודה אחת: תג קטן עם טקסט "IP" (font-size: 5).
**צבעים:** stroke #c49dff, nodes fill #7b2fff (small), center node fill #00e5ff.

---

### 2. `port-door.svg` — פורטים ושירותים
**קונספט:** דלת מודרנית בסגנון blueprint עם מספר פורט חרות עליה. הדלת: מלבן עם קווי מסגרת כפולים. בצד ימין: ידית עגולה קטנה. מעל הדלת: תג עם המספר "443" (font-size: 6, font-family: monospace). בתחתית: שלוש נקודות קטנות (status dots).
**צבעים:** stroke #c49dff, מספר הפורט fill #00e5ff, status dot ירוק #00ff9d.

---

### 3. `shield-circuit.svg` — חשיבת הגנה
**קונספט:** מגן בצורה קלאסית (hexagonal shield) עם מעגל אלקטרוני בפנים. המעגל: קווי L-shape (כמו על לוח PCB) עם 3 nodes קטנים. לא מגן סטנדרטי — edge של המגן עם "שיניים" קטנות (zigzag עדין) שנותנות תחושת חומת אש.
**צבעים:** stroke #c49dff, circuit nodes fill #00ff9d, מגן glow חזק יותר.

---

### 4. `terminal-tool.svg` — כלי סייבר אמיתיים
**קונספט:** חלון טרמינל עם שורת פקודה. מסגרת: מלבן עם 3 נקודות קטנות בראש (כמו macOS window buttons). בתוך החלון: שלוש שורות טקסט מונוספייס:
```
> nmap -sV
> 192.168.1
> ██████░░
```
(השורה האחרונה: progress bar חלקי עם rect קטנים)
**צבעים:** stroke #c49dff, טקסט fill #00e5ff, progress fill #00ff9d.

---

### 5. `magnify-data.svg` — חשיבה אנליטית
**קונספט:** זכוכית מגדלת שמפוקסת על **גרף רשת** (ולא על טקסט רגיל). בתוך הזכוכית: 4 נקודות מחוברות בקווים (mini network graph). ידית הזכוכית: קו עם קצה מעוגל, זווית 45°.
על שפת הזכוכית: סריג עדין (grid pattern) — מראה ניתוח/סריקה.
**צבעים:** stroke #c49dff, nodes בפנים fill #00e5ff, ידית #7b2fff.

---

### 6. `user-spark.svg` — עצמאות דיגיטלית
**קונספט:** סילואט של דמות אנושית פשוטה (ראש עיגול + גוף שני קווים) עם **אלמנטים דיגיטליים** יוצאים ממנה: 3 קרני זוהר (rays) בצדדים, ו-3 nodes קטנים בקצות הקרניים — כמו דמות שמחוברת לרשת. מעל הראש: כוכב/נקודה בהירה (כמו ברק).
**צבעים:** דמות stroke #c49dff, קרניים stroke #7b2fff opacity 0.7, nodes fill #00e5ff, ברק fill #00ff9d.

---

## תיקיית פלט

```
cyberpath/assets/icons/skills/
├── network-map.svg
├── port-door.svg
├── shield-circuit.svg
├── terminal-tool.svg
├── magnify-data.svg
└── user-spark.svg
```

---

## דוגמת קוד SVG (template)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <defs>
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <!-- אלמנטים כאן עם filter="url(#glow)" -->
</svg>
```

---

## בדיקת איכות — לפני סיום

- [ ] כל 6 האייקונים נראים כמשפחה אחת
- [ ] אף אייקון לא נראה גנרי / clipart
- [ ] הזוהר (glow) נראה בכל האייקונים
- [ ] SVG תקין — ניתן לפתוח בדפדפן ישירות
- [ ] הרקע שקוף לחלוטין
- [ ] הפרטים הקטנים (מספרי פורט, שורות קוד) קריאים בגודל 48px
