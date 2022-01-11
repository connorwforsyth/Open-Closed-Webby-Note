### **Background:**

Lorne Pharmacy’s website is a tool for customers to reserve rapid antigen test during this uncertain time.

### **Feature request:**

As a user, I want to be able to view whether the store is open when I visit the site, so that I know that I can go down and collect my RAT test.

(As a wannabee dev.. this is something that I want to learn how to do) — Connor.

![Ideally there are four variables to print.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e13a41ce-26cf-4764-8f21-62d6febe4287/Untitled.png)

Ideally there are four variables to print.

### **Minimum Viable:**

**When Hours = Open**

Print : ‘We’re open!’

and 

Assign the element colour of this class to:

```css
.box-color-bg {
color: #53FF8D;
}
```

**When Store is Closed:**

Print: ‘Opening at 9:30am!’

and 

Assign the element colour of this class to:

```css
.box-color-bg {
color: #FF5D53;
}
```

**Next level:**

When there are less than 8hrs to open...

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a6020e1f-bd62-4a6a-938a-f01b7bf48553/Untitled.png)

Print a countdown of the hours.

And change the colour to:

```css
.box-color-bg {
color: #53B7FF
}
```

When there is less than 60 mins to open:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7b791fa0-5fdd-4e05-9364-d154362502fd/Untitled.png)

Print: Open in (mins to open) mins

Change the colour to:

```css
.box-color-bg {
color: #7B61FF;
}
```

Current workings via javascript:
