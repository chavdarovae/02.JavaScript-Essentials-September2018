# Lab: Regular Expressions JavaScript

## 1. Match Full Name

Write a JavaScript Program to **match full names** from a list of names and **print** them on the console.

### Writing the Regular Expression

First, write a regular expression to match a valid full name, according to these conditions:

- A valid full name has the following characteristics:
  - It consists of **two words**.
  - Each word **starts** with a **capital letter**.
  - After the first letter, it **only contains lowercase letters afterwards**.
  - **Each** of the **two words** should be **at least two letters long**.
  - The **two words** are **separated** by a **single space**.

To help you out, we&#39;ve outlined several steps:

1. Use an online regex tester like [https://regex101.com/](https://regex101.com/)
2. Check out how to use **character sets** (denoted with square brackets - **&quot;[]&quot;**)
3. Specify that you want **two words** with a space between them (the **space character**&#39;&#39;, and **not** any whitespace symbol)
4. For each word, specify that it should begin with an uppercase letter using a **character set**. The desired characters are in a range – **from**  **&#39;A&#39;**  **to**  **&#39;Z&#39;**.
5. For each word, specify that what follows the first letter are only **lowercase letters** , one or more – use another character set and the correct **quantifier**.
6. To prevent capturing of letters across new lines, put **&quot;\b&quot;** at the beginning and at the end of your regex. This will ensure that what precedes and what follows the match is a word boundary (like a new line).

In order to check your RegEx, use these values for reference (paste all of them in the **Test String** field):

| **Match ALL of these** | **Match NONE of these** |
| --- | --- |
| Ivan Ivanov | ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, IvanIvanov |

By the end, the matches should look something like this:

![](RackMultipart20200821-4-na6h1g_html_9fef595bdb9a2d41.png)

After you&#39;ve constructed your regular expression, it&#39;s time to write the solution in JavaScript.

### Implementing the Solution in JavaScript

Create a new JavaScript file and copy your **regular expression** into a variable:

![](RackMultipart20200821-4-na6h1g_html_a445555ac8025188.png)

Note: You should put **&quot;/&quot;** before and after the pattern so that it is interpreted as a RegEx pattern. Also, place the **&#39;**** g&#39;** (global) flag after it, so that you get all the matches in the text.

Now, it&#39;s time to **read the input** , to **extract the matches** from it and push them into an array. For this we can use **exec()**:

![](RackMultipart20200821-4-na6h1g_html_cbc927942714fbc9.png)

The **exec** method matches the string and the pattern keeps the first index after the match. This way the next time **exec** runs it starts looking after the last match. If there are no more matches, it will return **null**.

We are declaring a variable in the while loop&#39;s condition because we need to check every time if there are any more matches.

Now we have an array ( **validNames** ), which holds all of the valid names in the input. All that is left is to **join** it by **space** and **print** it (do this by using **join()**):

![](RackMultipart20200821-4-na6h1g_html_978044cf85dd333b.png)

### Examples

| **Input** |
| --- |
| &quot;Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, IvanIvanov&quot; |
| **Output** |
| Ivan Ivanov Test Testov |

## 2. Match Phone Number

Write a regular expression to match a **valid phone number** from **Sofia**. After you find all **valid phones** , **print** them on the console, separated by a **comma and a space**  **&quot;**** , ****&quot;**.

### Compose the Regular Expression

A valid number has the following characteristics:

- It starts with **&quot;+359&quot;**
- Then, it is followed by the area code (always **2** )
- After that, it&#39;s followed by the **number** itself:
  - The number consists of **7 digits** (separated in **two**** groups **of** 3 **and** 4 ****digits** respectively).
- The different **parts** are **separated** by **either a space or a hyphen** ( **&#39;-&#39;** ).

You can use the following RegEx properties to **help** with the matching:

- Use **quantifiers** to match a **specific number** of **digits**
- Use a **capturing group** to make sure the delimiter is **only one of the allowed characters**** (space or hyphen) **and** not **a** combination**of both (e.g.**+359 ****2**** - ****111**** 111 **has** mixed delimiters **, it is** invalid**). Use a**group backreference** to achieve this.
- Add a **word boundary** at the **end** of the match to avoid **partial matches** (the last example on the right-hand side).
- Ensure that before the **&#39;+&#39;** sign there is either a **space** or the **beginning of the string**.

You can use the following table of values to test your RegEx against:

| **Match ALL of these** | **Match NONE of these** |
| --- | --- |
| +359 2 222 2222+359-2-222-2222 | 359-2-222-2222, +359/2/222/2222, +359-2 222 2222+359 2-222-2222, +359-2-222-222, +359-2-222-22222 |

### Implement the Solution in JavaScript

Now it&#39;s time to write the solution, so let&#39;s start writing!

First, just like in the previous problem, put your RegEx in a variable:

![](RackMultipart20200821-4-na6h1g_html_2f144a5c4ab609c2.png)

After that, let&#39;s make an array of matches using like in the previous exercise:

![](RackMultipart20200821-4-na6h1g_html_de7d486d0abb4de6.png)

Now let&#39;s print **all the matches** , separated by **&quot;, &quot;** :

![](RackMultipart20200821-4-na6h1g_html_fee5d2cfee49a5f0.png)

### Examples

| **Input** |
| --- |
| &quot;+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222&quot; |
| **Output** |
| +359 2 222 2222, +359-2-222-2222 |

## 3. Match Dates

Write a program, which matches a date in the format **&quot;dd{separator}MMM{separator}yyyy&quot;**.

### Compose the Regular Expression

Every valid date has the following characteristics:

- Always starts with **two digits** , followed by a **separator**
- After that, it has **one uppercase** and **two lowercase** letters (e.g. **Jan** , **Mar** ).
- After that, it has a **separator** and **exactly 4 digits** (for the year).
- The separator could be either of three things: a period ( **&quot;.&quot;** ), a hyphen ( **&quot;-&quot;** ) or a forward slash ( **&quot;/&quot;** )
- The separator needs to be **the same** for the whole date (e.g. 13 **.** 03 **.** 2016 is valid, 13 **.** 03 **/** 2016 is **NOT** ). Use a **group backreference** to check for this.

You can follow the table below to help with composing your RegEx:

| **Match ALL of these** | **Match NONE of these** |
| --- | --- |
| 13/Jul/1928, 10-Nov-1934, 25.Dec.1937 | 01/Jan-1951, 23/sept/1973, 1/Feb/2016 |

Use **named capturing groups** for the **day** , **month** and **year**.

Since this problem requires more complex RegEx, which includes **named capturing groups** , we&#39;ll take a look at how to construct it:

- First off, we don&#39;t want anything at the **start** of our date, so we&#39;re going to use a **word boundary**  **&quot;\b&quot;** :
 ![](RackMultipart20200821-4-na6h1g_html_afc59b39fef39b20.png)
- Next, we&#39;re going to match the **day** , by telling our RegEx to match **exactly two digits** ,and since we want to **extract** the day from the match later, we&#39;re going to put it in a **capturing group** :
 ![](RackMultipart20200821-4-na6h1g_html_5f53ff0395b1f364.png)
 We&#39;re also going to give our group a **name** , since it&#39;s easier to navigate by **group name** than by **group index** :
 ![](RackMultipart20200821-4-na6h1g_html_9f7ff1ebf4679bd2.png)
- Next comes the separator – either a **hyphen** , **period** or **forward slash**. We can use a **character class** for this:
 ![](RackMultipart20200821-4-na6h1g_html_5497bede3242618f.png)
 Since we want to use the separator we matched here to match the **same separator** further into the date, we&#39;re going to put it in a **capturing group** :
 ![](RackMultipart20200821-4-na6h1g_html_ff7104ae4b89b935.png)
- Next comes the **month** , which consists of a **capital Latin letter** and **exactly two lowercase Latin letters** :
 ![](RackMultipart20200821-4-na6h1g_html_ec1f69e022b30a54.png)
- Next, we&#39;re going to match the **same separator**** we matched earlier **. We can use a** backreference** for that:
 ![](RackMultipart20200821-4-na6h1g_html_889a5148e8b07c37.png)
- Next up, we&#39;re going to match the year, which consists of **exactly 4 digits** :
 ![](RackMultipart20200821-4-na6h1g_html_859ccd7913c8ca30.png)
- Finally, since we don&#39;t want to match the date if there&#39;s anything else **glued to it** , we&#39;re going to use another **word boundary** for the end:
 ![](RackMultipart20200821-4-na6h1g_html_8374ab1313c315ae.png)

Now it&#39;s time to find all the **valid dates** in the input and **print each date** in the following format: **&quot;Day: {day}, Month: {month}, Year: {year}&quot;** , each on a **new line**.

### Implement the Solution in JavaScript

First off, we&#39;re going to put our RegEx in a variable and get the matches from the string:

![](RackMultipart20200821-4-na6h1g_html_f066fed8ca253a29.png)

Next, we&#39;re going to **iterate** over every single **element** in the array and **extract** the **day** , **month** and **year** by making new patterns and matching them:

![](RackMultipart20200821-4-na6h1g_html_edf4a98d1ca980af.png)

### Examples

| **Input** |
| --- |
| &quot;13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016&quot; |
| **Output** |
| Day: 13, Month: Jul, Year: 1928Day: 10, Month: Nov, Year: 1934Day: 25, Month: Dec, Year: 1937 |

## 4. Match Numbers

Write a program, which finds all **integer** and **floating-point numbers** in a string.

### Compose the Regular Expression

A number has the following characteristics:

- Has either **whitespace** before it or the **start** of the string (match either **^** or what&#39;s called a [positive lookbehind](http://www.regular-expressions.info/lookaround.html)). The entire syntax for the **beginning** of your **RegEx** might look something like **&quot;(^|(?\&lt;=\s))&quot;**.
- The number might or might not be negative, so it might have a hyphen on its left side ( **&quot;-&quot;** ).
- Consists of **one or more digits**.
- Might or might not have **digits after the**** decimal point**
- The decimal part (if it exists) consists of a period ( **&quot;.&quot;** ) and **one or more digits** after it. Use a **capturing group**.
- Has either **whitespace** before it or the **end** of the string (match either **$** or what&#39;s called a [positive lookahead](http://www.regular-expressions.info/lookaround.html)). The syntax for the **end** of the **RegEx** might look something like **&quot;($|(?=\s))&quot;**.

Let&#39;s see how we would translate the above rules into a **regular expression** :

- First off, we need to establish what needs to exist **before** our number. We can&#39;t use **&quot;\b&quot;** here, since it includes **&quot;-&quot;** , which we need to match **negative numbers**.
 Instead, we&#39;ll use a **positive lookbehind** , which **matches** if there&#39;s something **immediately behind** it. We&#39;ll match if we&#39;re either at the **start** of the string ( **^** ), or if there&#39;s any **whitespace**** behind** the string:
 ![](RackMultipart20200821-4-na6h1g_html_59afc575e4cb7a0d.png)
- Next, we&#39;ll check whether there&#39;s a **hyphen** , signifying a **negative number** :
 ![](RackMultipart20200821-4-na6h1g_html_70568c84fcfa7e82.png)
 Since having a negative sign **isn&#39;t required** , we&#39;ll use the **&quot;?&quot;** quantifier, which means &quot; **between 0 and 1 times**&quot;.
- After that, we&#39;ll match any integers – naturally, consisting **one or more digits** :
 ![](RackMultipart20200821-4-na6h1g_html_7bb314d877e4e68a.png)
- Next, we&#39;ll match the **decimal** part of the number, which **might or might not exist** (note: we need to escape the **period** character, as it&#39;s used for something else in RegEx):
 ![](RackMultipart20200821-4-na6h1g_html_8ee098de2c5eb2e0.png)
- Finally, we&#39;re going to use the same logic for the end of our string as the start – we&#39;re going to match **only** if the number has **either a whitespace or the end of the string (****&quot; ****$****&quot;****)**:
 ![](RackMultipart20200821-4-na6h1g_html_2e9ab8980dd16eab.png)

You can follow the table below to help with composing your RegEx:

| **Match ALL of these** | **Match NONE of these** |
| --- | --- |
| 1 -1 123 -123 123.456 -123.456 | 1s s2 s-s -1- \_55\_ s-2 s-3.5 s-1.1 |

Find all the **numbers** from the string and **print them** on the **console** , separated by **spaces**.

### Implement the Solution in JavaScript

Now that we&#39;ve written our regular expression, we can start by putting it in an array containing all the matches:

![](RackMultipart20200821-4-na6h1g_html_ca9b29b72875f01.png)

After that, it&#39;s only a matter of printing the numbers, separated by spaces:

![](RackMultipart20200821-4-na6h1g_html_2ea298d048670960.png)

### Examples

| **Input** | **Output** |
| --- | --- |
| &quot;1-1 1s 123 s-s -123 \_55\_ \_f 123.456-123.456 s-1.1 s2 -1- zs-2 s-3.5&quot; | 1 -1 123 -123 123.456 -123.456 |

[![](RackMultipart20200821-4-na6h1g_html_4062ce8ea76a185d.png)](http://softuni.foundation/) ![](RackMultipart20200821-4-na6h1g_html_9b0988e43f50c79b.gif) ![](RackMultipart20200821-4-na6h1g_html_f746d52952cd7e91.gif) ![](RackMultipart20200821-4-na6h1g_html_75bb621a2d054d6e.gif) ![](RackMultipart20200821-4-na6h1g_html_8e84094ace6df644.gif)

Page 3 of 3

Follow us:

© [Software University Foundation](http://softuni.foundation/). This work is licensed under the [CC-BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/4.0/) license.

[![](RackMultipart20200821-4-na6h1g_html_f3d5179c0d1f53c.png)](http://softuni.bg/)[![](RackMultipart20200821-4-na6h1g_html_4b9dbb17ee958b46.png)](http://softuni.foundation/)[![Software University @ Facebook](RackMultipart20200821-4-na6h1g_html_94be3df36d913358.png)](http://facebook.com/SoftwareUniversity)[![Software University @ Twitter](RackMultipart20200821-4-na6h1g_html_ff9c629b0a21eb6b.png)](http://twitter.com/softunibg)[![Software University @ YouTube](RackMultipart20200821-4-na6h1g_html_7db86a748da0e575.png)](http://youtube.com/SoftwareUniversity)[![](RackMultipart20200821-4-na6h1g_html_a9d346b26d97741d.png)](http://plus.google.com/+SoftuniBg/)[![](RackMultipart20200821-4-na6h1g_html_9758e785eadf0cc.png)](https://www.linkedin.com/school/3529173/)[![Software University @ SlideShare](RackMultipart20200821-4-na6h1g_html_4719811fa6babb65.png)](http://slideshare.net/softwareuniversity)[![](RackMultipart20200821-4-na6h1g_html_660141fbd6d8d4a8.png)](http://github.com/softuni)[![Software University: Email Us](RackMultipart20200821-4-na6h1g_html_d7fa82ab7332f3fa.png)](mailto:university@softuni.bg)

 ![](RackMultipart20200821-4-na6h1g_html_3e71ea613f294223.png)