function t(t,e){let n=!1;"#"===t[0]&&(t=t.slice(1),n=!0);const r=parseInt(t,16);let s=(r>>16)+e;s>255?s=255:s<0&&(s=0);let l=(r>>8&255)+e;l>255?l=255:l<0&&(l=0);let c=(255&r)+e;return c>255?c=255:c<0&&(c=0),(n?"#":"")+(c|l<<8|s<<16).toString(16)}function e(t){"#"===t[0]&&(t=t.slice(1));const e=parseInt(t,16);return.3*(e>>16)+.6*(255&e)+.1*(e>>8&255)}export{e as g,t as l};