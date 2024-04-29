// Name: WikiPDF

import "@johnlindquist/kit"

const wiki = await npm("wikipedia");

let input = await arg("What article are you searching for")

const page = await wiki.page(input);
const pdf = await page.pdf();

open(pdf);





