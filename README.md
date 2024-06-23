# agent-hierarchy-tool

I want to create an agent tool to get the hierarchy of a given username using this api call: curl -X GET 'https://bridge.747lc.com/Default/GetHierarchy?username=asferdc12&isAgent=true' -H 'accept:text/plain'.  This api actual response is shown below: {
  "hierarchy": [
    {
      "id": 1506,
      "clientId": 454867,
      "username": "Info@747.live",
      "parentClientId": null
    },
    {
      "id": 17,
      "clientId": 457252,
      "username": "michaelpesigan08@gmail.com",
      "parentClientId": 454867
    },
    {
      "id": 206085,
      "clientId": 938176,
      "username": "Bossmarc747",
      "parentClientId": 457252
    },
    {
      "id": 265448,
      "clientId": 1051098,
      "username": "jace747clyde",
      "parentClientId": 938176
    },
    {
      "id": 270216,
      "clientId": 1062376,
      "username": "TeamBernzCM",
      "parentClientId": 1051098
    },
    {
      "id": 971900,
      "clientId": 1586400,
      "username": "Asferdc12",
      "parentClientId": 1062376
    }
  ],
  "user": {
    "id": 971900,
    "clientId": 1586400,
    "username": "Asferdc12",
    "parentClientId": 1062376
  },
  "status": 0,
  "message": "454867 Info@747.live->457252 michaelpesigan08@gmail.com->938176 Bossmarc747->1051098 jace747clyde->1062376 TeamBernzCM->1586400 Asferdc12"
}. I want to have a great ui for this. I need 2 container with shadows, first container contain a form yo let the user input the username and a dropdown to select agent or player where if the agent is selected then the param isAgent=true else false. Then the other container will show the result not in json but in an array of card with shadow amd slight different color with the container. Each card will contain username and userID in column view with a connecting arrow from button to top

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/agent-hierarchy-tool.git
cd agent-hierarchy-tool
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
