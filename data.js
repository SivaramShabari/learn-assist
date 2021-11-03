export const english = {
    stories: [
        {
            title: "The Tortoise And The Hare",
            names: ["The Tortoise And The Hare",
                "the tortoise",
                "the hare",
                "tortoise and hare",
                "tortoise ",
                "hare",
            ],
            content: [
                "This popular story is about a hare(an animal belonging to the rabbit family), which is known to move quickly and a tortoise, which is known to move slower.",
                `The story began when the hare who has won many races proposed a race with the tortoise.

                The hare simply wanted to prove that he was the best and have the satisfaction of beating him.`,


                `The tortoise agreed and the race began.
                The hare got a head- start but became overconfident towards the end of the race.
                His ego made him believe that he could win the race even if he rested for a while.`,


                `And so, he took a nap right near the finish line.
                Meanwhile, the tortoise walked slowly but extremely determined and dedicated.
                He did not give up for a second and kept persevering despite the odds not being in his favour.`,


                `While the hare was asleep, the tortoise crossed the finish line and won the race!
                The best part was that the tortoise did not gloat or put the hare down!`
            ]
        }
    ],
    poems: [
        {
            title: ["baba black sheep"],
            names: ["baba black sheep",
                "baba",
                "black sheep",],
            content: [
                `Baa, baa, black sheep,
                Have you any wool ?`,

                `Yes, sir, yes, sir,
                Three bags full;`,

                `One for the master,
                 And one for the dame,`,

                `And one for the little boy
                Who lives down the lane`
            ]
        }
    ]
}

console.log(english.poems[0].content[0].replace(/ +(?= )/g, '').replace('\n', ''))