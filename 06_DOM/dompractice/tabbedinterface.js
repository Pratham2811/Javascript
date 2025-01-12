/*let tab1=document.querySelector("#tab1")
let tab2=document.querySelector("#tab2")
let tab3=document.querySelector("#tab3")
let tab4=document.querySelector("#tab4")
let tab5=document.querySelector("#tab5")
let para=document.querySelector('p')
tab1.addEventListener('click',function(){
    para.textContent=`Letter to a Friend
Hi, Fred!

It's been a while since we have been in touch. How has your semester been?

I wanted to send an email update to you let you know how things have been going during my semester abroad here in Málaga, Spain. I've already been here for six weeks, and I feel like I am finally adapting to the culture. I'm also speaking the language more fluently.

I arrived during the first week of September. The weather has been very nice. Even though it's October, it's still rather sunny and warm. In fact, I went to the beach and swam in the Mediterranean Sea earlier today.

I am living with a very welcoming host family. I have my own private bedroom, but we eat breakfast, lunch, and dinner together. On Sundays, we eat a big home-cooked paella for lunch. In Spain, lunch is usually the biggest meal of the day. It's also very common for the people to take a midday nap right after a big meal. I am actually just waking up from my nap right now!

On weekdays, I take classes at the local university. There, I met several native Spanish speakers. They have been very kind and patient with me. At first, I struggled to comprehend their Spanish, but now I understand most of our conversations. They have commented that my Spanish has improved a lot since we first met. Now, I am more confident to use the language in other places like stores and restaurants.

I am so glad that I decided to spend the semester here in Spain. We have an extended weekend coming up, so a group of my friends and I are going to travel to France for four days. It's so easy and inexpensive to travel internationally in Europe. I love it!

I look forward to hearing from you soon. Like I said, don't hesitate to stay in touch more often. Perhaps you could even come to visit! What do you think?

Best wishes,
Patrick`
})
tab3.addEventListener('click',function(){
    para.textContent=`My family at home
My family lives in a small house. It’s simple but pretty. It has a large garden. I like to work in the garden but my sister hates to work in the garden. She prefers to read. She reads in the morning, in the afternoon and at night.

I give all of the vegetables to mom and dad. They like to cook in our small kitchen. I eat any vegetable but my sister eats only a few.

My family always eats breakfast and dinner together. We talk. We laugh. Then my sister washes the dishes.

At night dad likes to listen to music. Mom works on the computer. I watch television. And my sister reads.

Soon we go to bed. My parents go to bed late but my sister and I go to bed early. I’m ready to go to sleep but my sister wants to keep reading.

`
})
tab2.addEventListener('click',function(){
    para.textContent=`Going to the Supermarket
Martha is at the grocery store, getting ready for a house party. She has a list of what she needs with her as she goes along. The first section she comes has produce. Martha sees apples, bananas, cherries, grapes, and strawberries. She checks her list:

- 6 apples
- 1 bag of cherries
- 1 bag of grapes
- 2 cartons of strawberries

Martha gets her items and looks the bananas. They are on sale for much cheaper than they are normally. She picks 3 bananas. Next are vegetables. She sees potatoes, carrots, tomatoes, onions, mushrooms, and salad in bags. She checks her list:

- 5 pounds of potatoes
- 6 carrots
- 4 tomatoes
- 2 onions
- 4 mushrooms

As she is putting her items into her cart, Martha checks the many bags of salad and chooses 2 of them. She pushes her cart ahead. The next section is meat and dairy. She sees meat, fish, cheese, eggs, and milk. She checks her list:

- 2 fish (salmon)
- 1 block of cheese (cheddar)
- 1 dozen eggs
- 2 gallons of milk

She looks at the meat that is on sale and chooses a 5-pound roll of hamburger. She gets the rest of the items in that section. She still needs rice, bread, salt, sugar, and flour. She gets:

- 2 bags of rice
- 4 loaves of bread
- a 2-pound bag of sugar
- a 2-pound bag of flour

Martha then realizes that she has forgotten something. She runs back and gets 1 container of salt and then rushes to the checkout. She puts her groceries into her car and leaves.`
})
tab4.addEventListener('click',function(){
    para.textContent=`My morning routine
My name is Bob. Each day I drive my kids to school. My daughter goes to a school that’s far from our house. It takes 30 minutes to get there. Then I drive my son to his school. It’s close to my job. My daughter is in the sixth grade and my son is in the second. They are both good students. My daughter usually sings her favorite songs while I drive. My son usually sleeps.

I arrive at the office at 8:30 AM. I say good morning to all my workmates then I get a big cup of hot coffee. I turn on my computer and read my email. Some days I have a lot to read. Soon I need another cup of coffee.`
})
tab5.addEventListener('click',function(){
    para.textContent=`The House
Mr. and Mrs. Smith have one son and one daughter. The son's name is John. The daughter's name is Sarah.

The Smiths live in a house. They have a living room. They watch TV in the living room. The father cooks food in the kitchen. They eat in the dining room. The house has two bedrooms. They sleep in the bedrooms. They keep their clothes in the closet. There is one bathroom. They brush their teeth in the bathroom.

The house has a garden. John and Sarah play in the garden. They have a dog. John and Sarah like to play with the dog.

`
})*/

let home=document.querySelector("#home")
let about=document.querySelector("#about")
let contact=document.querySelector("#contact")
let hometext=document.querySelector('#hometext')
let abouttext=document.querySelector('#abouttext')
let contacttext=document.querySelector('#contacttext')
hometext.style.display='initial'
hometext.style.width='100%'
home.addEventListener('click',function(){
    cleAllText()
    hometext.style.display='block'
    hometext.style.width='100%'
})
about.addEventListener('click',function(){
    cleAllText()
    abouttext.style.display='block'
    abouttext.style.width='100%'
    
})
contact.addEventListener('click',function(){
    cleAllText()
    contacttext.style.display='block'
    contacttext.style.width='100%'
    
})

function cleAllText(){
   document.querySelectorAll('h3').forEach(function(h3){
   h3.style.display='none'
   })

}

