# JillV3

`discord.js` powered variety bot. Successor to [JillV2](https://github.com/Rosalina121/JillV2).

## Running
### Deps
- Bun (or perhpas Node, see bottom of ReadMe)
- Created [Discord App](https://discord.com/developers/applications)
  - You'll need the `DISCORD_TOKEN`, `CLIENT_ID` in your `.env`
- A Discord server where you'll run Jill
  - You'll need its `GUILD_ID` in your `.env`
### Run
```bash
bun install
# register bot commands in your server
bun run deploy-commands.ts
# run bot
bun run index.ts
```
## Structure
Project is set up basically just how the `discord.js` setup instructs you to. So in `commands` there are sub-directories for types of specific slash-commands. It's all made up so don't feel obliged to stick to them.

Why Bun? Currently it could run just fine with Node. Bun is used only coz I'm planning on using some Bun-specific features/syntax. You can prolly run it with Node out of the box.