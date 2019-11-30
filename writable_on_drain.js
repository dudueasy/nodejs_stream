const fs = require('fs');

function writeOneMillionTimes(writable, data, encoding, callback) {
  let i = 1000000;
  write();

  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // 最后一次写入。
        writable.write(data, encoding, callback);
      } else {
        // 检查是否可以继续写入。
        // 不要传入回调，因为写入还没有结束。
        ok = writable.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // 被提前中止。
      // 当触发 'drain' 事件时继续写入。
      writable.once('drain', () => {
        console.log('chunk 写入完毕')
        write();
      });
    }
  }
}

const writer = fs.createWriteStream('./another_big_file.txt');
writeOneMillionTimes(writer, 'hihi', 'utf-8');
