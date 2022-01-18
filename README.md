![Top banner](https://raw.githubusercontent.com/VilleKylmamaa/Real-Good-Time/main/github-images/banner1.jpg)

# Awful Everything Website - Real Good Time

For an authentic first-time experience, test the prototype by following the link below before reading the rest of the documentation. Sound should be on. Preferably use one of the recommended browsers.

Link to the hosted project:

_**https://real-good-time.web.app/**_

**Recommended browsers**: Chrome works the best, Edge works almost as good.

**Not recommended browsers**: Firefox - it severely lags some elements.


<br>


## What on Earth is This Project?

This project is for a course called _Creative Design_ in _University of Oulu_. The only specifications of the project was that it should seek to cause some type of emotions. Other than that, it could be absolutely anything.

I set out to create a website mainly seeking to cause amusement, and perhaps annoyance. Hopefully leaning on the amusement side. I also hoped to cause surprisement and I imagine it might cause confusion as well.

The website follows the design heuristic called "_awful everything_". There are many things you can do wrong when making a website, and people nowadays get easily annoyed and frustrated by things such as ugly aesthetics, anything that autoplays, excessive moving parts or pop-ups, etc. That's where the idea started. Purposefully doing everything "wrong" creates amusement from a parody effect, at least when done right.

The project is named "Real Good Time" because it's a stupid and sarcastic title, fitting for the theme.

The website is implemented using HTML, CSS, JavaScript, jQuery and Bootstrap. It's hosted for free on Google's Firebase platform.

Hopefully it's evidently clear that this isn't a very serious project - it's a playful and humorous project. Making it was certainly fun. Should anyone hate it, they have my permission to hate it as much as they desire to.


<br>


## Content

What is on this website? Well, a lot:

![Main screen](https://github.com/VilleKylmamaa/Real-Good-Time/blob/main/github-images/main.jpg)

The general aesthetics are unsightly, on purpose of course. There are way too many colors, the placement of elements is off, there are very little frames and the font is ugly - it's comic sans, the obvious choice. Behind the rainbow gradient background there's He-Man from a well-known meme. The video where he goes "_HEYYEYAAEYAAAEYAEYAA_" always brings my mood up so I have chosen him as a sort of a mascot for this project.

A website should generally have very little non-distracting moving parts or simply no moving parts. This website has way too many moving parts and they are very distracting. It uses marquees which is a deprecated web element. Marquees are any text or images running left, right, up or down. Some browsers hate marquees more than others. For example, they lag a lot on Firefox. I actually tried to create my own or find a ready-made JavaScript marquee to use instead of the standard web element. The one I currently have works decently but it can't change speed of the marquee or alternate the direction on Firefox, and both of those features are used on the website. So, the current solution is good for half of the marquees but it could be improved for Firefox.

The website is full of objects which can be interacted with by clicking them. Interacting with the objects produces varying results focusing on using images and sounds to amuse and surprise the user. The website makes use of numerable memes and references. There are 132 images in the image folder and 37 items in the sound effect folder.
Any music or sound effect that is played can play on top of each other as many times as the user clicks them before letting the ones already playing finish. The "good" way of doing things would probably be muting all the audio that is currently playing and then starting the new one which the user evoked. I have done that to some extent in some cases but I have purposefully left in the possibility for the user to spam sound as much as they like because it can be fun at times and it's fittingly awful.

### Consent Form

The first thing that happens when the site loads is an immediate "consent form" pop-up:

![Consent form](https://github.com/VilleKylmamaa/Real-Good-Time/blob/main/github-images/consent-form.jpg)

If the user chooses "no", the no option is simply removed leaving only the "yes" option. This isn't actually just a joke. Nowadays, all decent browsers try to stop any auto-playing sounds on a website. This isn't something I was aware of before and while it's a great feature in general, it did propose a challenge to this project.

Videos can autoplay if they are muted, so the first solution I had was first loading the video in muted and then unmuting it when the user clicks anywhere on the page. Turns out a click anywhere is good enough consent for browsers to allow unmuting any video. However, this solution is quite poor because the video starts playing muted and especially poor if the user takes a long time to make any clicks which might happen because the page has a lot to look at. I confirmed this to be the case evaluating the project in person.

The second solution is the one that is currently implemented. The consent form is in fact truly a consent form where the user has to click "yes" to continue, which will unmute the video. The user just doesn't know what they are consenting to, but luckily for this project, browsers don't mind.

### The "Main Script"

After getting through the consent form, the first thing on the page that likely catches the user's attention is the video. It's in the center, it's making sound and it's bizarre. The video is called "Ronald McDonald Insanity" and it is a sort of a remix of a song called "U.N. Owen Was Her?". I find it to be a fitting balance of annoying and entertaining. The "main script" of the project, which I think is its most creative part, is based around the video. The script goes like this:

1.	Given that the user didn't know what they were consenting to, they would likely like to stop the video. That's why the video has to be at least somewhat annoying, to make the user want to stop it. The video is unclickable which means that it can't be paused or muted with the mouse.

2.	Luckily for the user, I have been kind enough to provide two whole stop buttons - one located above and one below the video.

3.	Unluckily for user, the one above runs around when moused over and won't let itself get clicked, and the one below runs completely off screen leaving just a confused Travolta behind.

4.	The user is likely to try to keep chasing the one above to see if it can actually be clicked. Its movement is quite entertaining too. Luckily for the user, the button does stop running away after it has done so about 6 times.

5.	Yet again, unluckily for the user, the button doesn't actually stop the video. Instead of doing nothing it does something worse. It creates another video which also immediately starts playing, and it's playing out of sync with the original video. The user might click the button again to see if it would stop the video but it'll just create more videos making the situation worse.

6.	But wait, a hint has appeared on the screen. The hint guides the user to kill the mushrooms to stop the video. There were originally two mushrooms dancing next to the original video and each newly created video also brings two mushrooms with it. The cursor also now turns into a sword when mousing over the mushrooms to indicate this new possibility to slay them.

7.	The user slays all the mushrooms. When the final mushroom is killed, the videos don't stop but they do all get muted. However, the voice of GLaDOS from a game called Portal explains that a surprise is being deployed. There's a countdown to the surprise which turns out is that more mushrooms start spawning every second all by themselves. The music that is played then is a snippet from "For the Damaged Coda" which is a known meme song when something goes wrong. It'll help the user realize faster that this new situation is inescapable. The mushrooms spawn faster than the user is able to kill them. 15 mushrooms every second to be exact. There could be a quick and immediate flood of mushrooms but I think this slower pace is great for giving the user extra time to process and realize what's happening. When the snippet is done playing all the videos will unmute, and there is indeed no way to mute the videos or stop the mushrooms from spawning. The situation the user is now succumbing to is much worse than just the single video they started off with before they did anything, even though they were coaxed to following these steps. The only escape is to refresh or close the page.

If you let the mushrooms do their thing for too long the page will eventually look like this:

![Screen filled with dancing mushrooms](https://github.com/VilleKylmamaa/Real-Good-Time/blob/main/github-images/mushroom-hell.jpg)

<br>

## Evaluation of the Project

I have evaluated this project in two ways. In person with the user (the victim), and by sending a link to people online followed by a questionnaire.

### First Method - In Person

In the first method of evaluation, I was with friends whom I blessed with this gift. I let them explore the website with zero explanation or context what it's about. I have done this with 3 friends at different times. Them being my close friends of course makes this method very biased, but it was definitely very useful for noticing bugs and finding ways to improve the prototype.

The first solution for unmuting the video was unmuting it when the user clicks anywhere on the page. However, the user might take a long time before they click anywhere even though there are many things on the page coaxing the user to click them. This happened with one friend who just liked looking at the things for long time before making a click and they said that they originally thought that the page was silent. Thus, the consent form solution was implemented.

There was one object which didn't do anything when clicked where a friend expressed that they expected it to do something, so I made it do something. Another object, the bottom scrolling gifs marquee, did the same thing as the upper scrolling marquee with the Deja Vu meme, which one friend expressed that it was lame it did the same thing so I changed it to the GTA reference.

The project made all of the trialled friends laugh, which I was very happy about. Even the one who isn't so well versed in internet memes. They also all understood that this was some sort of parody or "awful everything" design without me having to explain it. Afterwards I asked them about the emotions the website brought up and they mostly mentioned amusement, surprisal, confusion and annoyance. I translated their words to the closest corresponding ones as used in the questionnaire in the second method. Overall, they all liked the experience with the caveat that it should be only used for a short period before it becomes annoying.

### Second Method - Online Questionnaire

I sent the link to the prototype and to the questionnaire also without any explanation or context about what might await them, other than the recommended browsers. I sent them to a small group of fellow CSE students.

The questionnaire had only one question because I don't want to demand too much time from people with this playful project. The question was about this project's only specification which was that it should evoke some emotion: "Which emotions did Real Good Time evoke?". The options in this multiple-choice questionnaire were: amusement, annoyance, confusion, disgust, frustration, sadness, surprise and "other". The answerers were allowed to choose as many options as they wanted.

Here are the results from 9 answerers:

![Questionnaire results](https://raw.githubusercontent.com/VilleKylmamaa/Real-Good-Time/main/github-images/questionnaire-answers.jpg)
 
Amusement was the most common answer - 8 out of 9 answerers were amused - which is awesome! The top 4 emotions, in the order of popularity, were:

1.	Amusement
2.	Surprise
3.	Confusion
4.	Annoyance

This is what I expected the top 4 to be but I wasn't sure about the order. I'm glad amusement and surprise - the "better" emotions - came on the top. The one " :o " answer is an emoji which was an answer to the "other" field.

Both methods had some bias and 12 total evaluators isn't very high, but I find this to be good enough for a playful project and these methods were still useful for improving and evaluating the project.


<br>

![Bottom Travolta](https://raw.githubusercontent.com/VilleKylmamaa/Real-Good-Time/main/github-images/travolta-bottom.jpg)

<br>
