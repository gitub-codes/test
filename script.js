document.getElementById('toggleBio').addEventListener('click', function() {
    const bioElement = document.getElementById('bio');
    if (bioElement.innerText === "I am a passionate developer with skills in web technologies. I am currently expanding my knowledge in front-end and back-end development.") {
        bioElement.innerText = "I am a passionate developer who loves creating interactive web applications. I specialize in front-end technologies like HTML, CSS, and JavaScript. Additionally, I am gaining expertise in React and Node.js, constantly expanding my skills to develop modern and scalable web solutions.";
        this.innerText = "Show Less";
    } else {
        bioElement.innerText = "I am a passionate developer with skills in web technologies. I am currently expanding my knowledge in front-end and back-end development.";
        this.innerText = "Show More";
    }
});
