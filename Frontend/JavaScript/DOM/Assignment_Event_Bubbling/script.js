let users = [
  {
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Ethan Walker",
    role: "Frontend Developer",
    company: "PixelCraft Studios",
    skills: ["React", "JavaScript", "Tailwind CSS", "TypeScript"],
    about: "Passionate about clean UI and performance optimization.",
    status: "Stranger",
  },
  {
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Sophie Mitchell",
    role: "Backend Engineer",
    company: "ByteLogic Labs",
    skills: ["Node.js", "MongoDB", "Docker", "Express.js"],
    about: "Loves building scalable and secure APIs.",
    status: "Stranger",
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Liam Chen",
    role: "Full Stack Developer",
    company: "DevHive Solutions",
    skills: ["Vue.js", "Firebase", "MySQL", "GraphQL"],
    about: "Enjoys solving complex problems with clean code.",
    status: "Stranger",
  },
  {
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Amelia Reyes",
    role: "UI/UX Designer",
    company: "CreativeMatter",
    skills: ["Figma", "Sketch", "Adobe XD", "Prototyping"],
    about: "Designs delightful user experiences with empathy.",
    status: "Stranger",
  },
  {
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Noah Gupta",
    role: "DevOps Engineer",
    company: "CloudOps Technologies",
    skills: ["AWS", "CI/CD", "Terraform", "Kubernetes"],
    about: "Bridging the gap between development and operations.",
    status: "Stranger",
  },
  {
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Olivia Carter",
    role: "Data Scientist",
    company: "Neuron Analytics",
    skills: ["Python", "Pandas", "Machine Learning", "TensorFlow"],
    about: "Uncovering insights from messy datasets.",
    status: "Stranger",
  },
  {
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Aiden Brown",
    role: "Mobile App Developer",
    company: "AppSphere Inc.",
    skills: ["Flutter", "Dart", "React Native", "Firebase"],
    about: "Building smooth and interactive mobile apps.",
    status: "Stranger",
  },
  {
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Chloe Wilson",
    role: "Product Manager",
    company: "Visionary Tech",
    skills: ["Agile", "Scrum", "Roadmapping", "User Research"],
    about: "Aligns product goals with user needs and business value.",
    status: "Stranger",
  },
  {
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "James Kim",
    role: "Cybersecurity Analyst",
    company: "SecureNet Labs",
    skills: ["Network Security", "Penetration Testing", "SIEM", "Python"],
    about: "Securing systems one vulnerability at a time.",
    status: "Stranger",
  },
  {
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Isabella Rossi",
    role: "QA Engineer",
    company: "Testopia",
    skills: ["Selenium", "Cypress", "Jest", "Postman"],
    about: "Ensures every release is bug-free and reliable.",
    status: "Stranger",
  },
];

let main = document.querySelector(".main");

function handleCardRender() {
  let card = "";
  users.forEach((user, id) => {
    card =
      card +
      `<div class="card w-[25%] min-h-[540px] odd:bg-teal-200 even:bg-indigo-300 p-4 rounded-md text-center shadow-purple-600 shadow-xl">
        <img
          src="${user.img}"
          class="rounded-full w-30 h-30 object-cover justify-self-center"
          alt=""
        />
        <h1 class="font-bold text-2xl my-2">${user.name}</h1>
        <h5 class="font-semibold text-slate-500">${user.role}</h5>
        <h3 class="text-blue-800 font-semibold my-2">
          <i class="bi bi-buildings me-3"></i>${user.company}
        </h3>
        <div class="skills my-3 flex flex-wrap gap-5 text-center justify-center">
          ${user.skills
            .map(
              (skill) =>
                `<div class="skill1 bg-green-300 py-1 rounded px-3">${skill}</div>`
            )
            .join("")}
        </div>
        <p class="my-5 font-semibold">
          ${user.about}
        </p>
        <hr class="text-white"/>
        <h6 class='my-3 font-bold text-xl ${
          user.status === "Stranger" ? "text-red-500" : "text-green-500"
        }'>${user.status}</h6>
        <button id=${id} class="bg-purple-500 p-2 text-white px-4 rounded">
          ${user.status === "Stranger" ? "Add Friend" : "Remove Friend"}
        </button>
      </div>`;
  });
  main.innerHTML = card;
}

handleCardRender();

main.addEventListener("click", (e) => {
  let user = users[e.target.id];
  if (user.status === "Stranger") {
    user.status = "Friend";
  } else {
    user.status = "Stranger";
  }
  handleCardRender();
});
