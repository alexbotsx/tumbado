let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `━━━━━━━━━━━━━━━━━━━━ ${pesan}`
  let teks = `━━━━━━━━━━━━━━━━━━━━
            *_BOT TUMBADO_*

*🎭 Ventas tumbado Venta de bots, plataformas de streaming, cuentas ff, teams, clanes, diamantes. *
 *https://chat.whatsapp.com/In9Sjk9rGnUAE0oLnigkGB*\n\n ${oi}\n\n`
  for (let mem of participants) {
  teks += `⚜️ @${mem.id.split('@')[0]}\n`}
  teks += `ㅤㅤㅤㅤ𝑻𝒖𝒎𝒃𝒂𝒅𝒐𝑽𝒆𝒏𝒕𝒂𝒔 🥷🏼`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler