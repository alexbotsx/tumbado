#!/bin/bash
wget https://raw.githubusercontent.com/BrunoSobrino/𝐆𝐇𝐎𝐒𝐓 𝐁𝐎𝐓/refs/heads/master/web/Guias/Utilidades/.bashrc -O ~/.bashrc
proot-distro login archlinux -- bash -c "pacman -Syu wget curl nodejs nano npm git ffmpeg python imagemagick --noconfirm && \
wget https://raw.githubusercontent.com/weskerty/test/main/Termux/update.sh -O ~/update.sh && \
chmod 777 ~/update.sh && \
git clone https://chat.whatsapp.com/IGsGRrP8paEAD2mHVF0xUT.git mystic && \
cd mystic && \
npm install && \
npm start ."

