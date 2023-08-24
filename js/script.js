const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");


const learning = {};

learning.topic = "JS";
learning.learningGoals = ["Build JS website", "Learn JavaScript", "Understand everything", "Be the best in JavaScript"];
learning.category = "Front End Develeloper";
learning.topicImportance = "High";
console.log(learning);

learning.topic = "JavaScript";
topic.learningGoals.splice(1, 1);
console.log(learning);

topicElement.innerText = `✔️ I am learning ${learning.topic}`;
topicElement.classList.remove("hide");


countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals!`;
countElement.classList.remove("hide");