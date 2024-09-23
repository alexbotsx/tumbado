const handler = async (m, {conn, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.info_groupsofc

  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `${tradutor.texto1[0]}

${tradutor.texto1[1]}
1.- https://chat.whatsapp.com/In9Sjk9rGnUAE0oLnigkGB

2.- https://chat.whatsapp.com/In9Sjk9rGnUAE0oLnigkGB

3.- https://chat.whatsapp.com/In9Sjk9rGnUAE0oLnigkGB

4.- https://chat.whatsapp.com/In9Sjk9rGnUAE0oLnigkGB

> GHOST TEAM :

1.- https://chat.whatsapp.com/In9Sjk9rGnUAE0oLnigkGB

2.- https://chat.whatsapp.com/In9Sjk9rGnUAE0oLnigkGB`.trim();
  const buttonMessage= {
    'document': {url: `https://chat.whatsapp.com/In9Sjk9rGnUAE0oLnigkGB`},
    'mimetype': `application/${document}`,
    'fileName': `${tradutor.texto2}`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://chat.whatsapp.com/In9Sjk9rGnUAE0oLnigkGB',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': `${tradutor.texto3}`,
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://chat.whatsapp.com/In9Sjk9rGnUAE0oLnigkGB'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
