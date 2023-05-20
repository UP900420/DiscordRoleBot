/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable require-await */
module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log('Bot Online!');
    async function pickPresence() {
      const option = Math.floor(Math.random() * statusArray.length);
      try {
        await client.user.setPresence({
          activities: [
            {
              name: statusArray[option].content,
              type: statusArray[option].type,
            },
          ],
          status: statusArray[option].status,
        });
      } catch (error) {
        console.error(error);
      }
    }
  },
};
