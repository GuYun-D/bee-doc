const { domain, port } = require("../config");

function createMenuItem(filename, userDoman, userPort, isActive) {
  return `
        <li class="menu-item${isActive ? " active" : ""}">
            <a href="${_foratBaseUrl(
              userDoman,
              userPort
            )}/src/html/${filename}" target="myFrame">${filename.replace(
    ".html",
    ""
  )}</a>
        </li>
    `;
}

function _foratBaseUrl(userDomain, userPort) {
  userPort = Number(userPort);
  if (userDomain && userPort) {
    return `${userDomain}:${userPort}`;
  } else if (userDomain && !userPort) {
    return `${userDomain}`;
  } else if (!userDomain && userPort) {
    return `${domain}:${userPort}`;
  } else if (!userDomain && !userPort) {
    return `${domain}:${port}`;
  } else {
    return `${domain}:${port}`;
  }
}

function replaceHtml(reg, html, content) {
  return html.replace(html.match(reg)[1]), content;
}

function createIfame(filename, userDomain, userPort) {
  return `
    <iframe src="${_foratBaseUrl(
      userDomain,
      userPort
    )}/src/html/${filename}" name="myFrame"></iframe>
  `;
}

module.exports = {
  createMenuItem,
  replaceHtml,
  createIfame
};
