const linksSocialMedia = {
  github: "Massafelli",
  youtube: "maykbrito",
  facebook: "leonardo.massafelli",
  instagram: "leomassafelli",
};

function changeSocialMediaLinks(links) {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

async function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  const request = await fetch(url);
  const data = await request.json();

  userName.textContent = data.name;
  userBio.textContent = data.bio;
  userLink.href = data.html_url;
  githubAvatar.src = data.avatar_url;
  userLogin.textContent = data.login;
}
getGithubProfileInfos();
