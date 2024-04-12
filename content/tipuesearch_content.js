var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://41023124.github.io/cd2024/ \n 網誌:\xa0 https://41023124.github.io/cd2024/blog \n 簡報:\xa0 https://41023124.github.io/cd2024/reveal \n 倉儲:\xa0 https://github.com/41023124/cd2024 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': '每周進度報告', 'text': '', 'tags': '', 'url': '每周進度報告.html'}, {'title': 'w1', 'text': '第一周進度 \n 依照mde.tw/cd2024中的 Topics / Video中的影片 \n 建立個人課程 cd2024 倉儲與網站的操作影片 \xa0(7:17) \n 設定 Replit 與 Github 應用授權的說明影片 \xa0(2:44) \n 說明如何設定 Github 雙重認證 \xa0(6:28) \n 說明如何利用 Replit 對 cd2024 改版 \xa0(20:16) \n 照著影片中的步驟創建個人的cd2024倉儲與網站與如何與Replit連結Github，並更新上推至倉儲去做更新 \n \n 設定網誌 \n 利用 [OBS] 加上廣播系統錄製的: \xa0 如何設定個人倉儲中的 Pelican 網誌 \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '根據上述規劃, 甲班第一分組的期中協同倉儲將位於: \xa0 https://github.com/mdecd2024/2a-midag1 , 第一組的期中報告網站將位於: \xa0 https://mdecd2024.github.io/2a-midag1 . \n 說明 甲班第一組組長如何建立 midag1 Team , 並利用 Codespaces 維護 2a-midag1 分組倉儲 \n 說明如何 利用 Replit 管理從 Classroom 取得的分組倉儲 \n 待各分組的期中報告 Team 與倉儲全部建立就緒後, 則甲班學員後續可配合期末作業名稱 2a2, 由甲班各組組長建立 Team finalag1, finalag2 ....等. \n \n 利用 Codespaces 維護倉儲與網站 \n 說明 如何利用 Github Codespaces 維護網站內容 \n 由於 Github Codespaces 免費帳號目前每月 可以使用 120 core hours , 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. \n \n 在近端執行動態網站 \n 說明 如何利用近端可攜系統維護分組網站 \n \n \n 第二周進度 \n 協同產品設計實習的第二週, 主要利用 Github Classroom 進行協同分組, 並引導學員除了 Replit, 可以利用 Github Codespaces 維護個人或分組網站內容. \n \n 利用 Github Classroom 指定分組倉儲 \n 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. \n 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. \n 範例分組倉儲: \xa0 https://github.com/mdecd2024/test-ag1 \n 期中分組作業名稱甲班為 2a, 其中甲班第一組組長必須建立名稱為 midag1 的 Team, 讓第一組的組員員加入. 其餘各組的期中報告 Team 名稱則分別為 midag2, midag3 .... \n 根據上述規劃, 甲班第一分組的期中協同倉儲將位於: \xa0 https://github.com/mdecd2024/2a-midag1 , 第一組的期中報告網站將位於: \xa0 https://mdecd2024.github.io/2a-midag1 . \n 待各分組的期中報告 Team 與倉儲全部建立就緒後, 則甲班學員後續可配合期末作業名稱 2a2, 由甲班各組組長建立 Team finalag1, finalag2 ....等. \n \n 利用 Codespaces 維護倉儲與網站 \n 說明 如何利用 Github Codespaces 維護網站內容 \n 由於 Github Codespaces 免費帳號目前每月 可以使用 120 core hours , 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. \n \n ODOO 參考資料 \n https://www.google.com/search?q=sap+vs+odoo \xa0 (與 SAP 及 ODOO 有關的搜尋) \n 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf \xa0 or \xa0 local download \xa0 (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) \n 英文單字查詢: \xa0 2021_odoo_reading.html \n 針對以上課程內容, 請利用以下留言系統進行討論: \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': 'W3 任務交付 \n cd2024 w3 任務 \n \xa0 \n 1. 請各組將組員的個人課程倉儲 cd2024 設為分組倉儲 2a-midag1 的子模組, 且以各組員的學號作為子模組的名稱 \n \xa0議題: \n 如何在倉儲中設定子模組, 為何要將資料設為子模組? \n 能不能在 Replit 維護分組網站? 其他方法還可以直接使用 Codespaces, Gitpod 與 localhost 維護倉儲與網站 \n 假如仍希望使用 Replit 維護分組網站, 該如何進行? \n \xa0 \n 2. 請各組員將負責分工處理的  https://webthesis.biblio.polito.it/16429/1/tesi.pdf  中英文並列資料 (LaTeX) 放在個人的倉儲網站, 最後在分組倉儲中整合建立出各組的期中報告 pdf 檔案 \n 該文章有 87 頁, 若有八名組員, 則每人可分工負責 11 頁, 若兩組以上結合協同, 則可按照規劃, 從文章標題開始到最後一頁, 先分配各組員任務後展開中英文並列編輯, 可以使用翻譯軟體或 ChatGPT 協助進行內容解釋或翻譯, 各組通篇完成中英並列資料整合後, 各學員必須於個人的課程倉儲 cd2024 中整理出協同過程的心得. \n 當文章翻譯或了解其內容後, 接下來該如何套用到期中報告題目: ODOO PLM 在協同產品設計上的應用 - 以鋼球平衡台機電控制系統設計為例 \n 假如採用 Onshape 進行零組件設計繪圖 \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w3-2', 'text': '\n 本周為第三周，進度是照著網誌中的影片將組員的個人倉儲設為分組倉儲子模組與有關 LaTeX 轉 pdf 在 Windows 環境, 說明如何利用 LaTeX 協同建立分組報告。 \n \n 2024 Spring 協同產品設計實習的第三週, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. \n 列出期中分組倉儲與網站 \n cd2024 期中分組倉儲與網站 \n 上列連結使用 [Brython] 程式語法, 可直接在網頁中列出特定連結內容, 所採用的程式碼如下: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n \n \n \n # 從 Brython browser 模組導入 document 與 html \n from   browser  import   document, html \n # get output html location \n brython_div  =   document[ "brython_div1" ] \n div  =   "a" \n org  =   "mdecd2024" \n midterm  =   "mid"   +   div  +   "g" \n group_num  =   8 \n for   i  in   range ( 1 ,group_num + 1 ): \n \xa0\xa0\xa0\xa0 site_url  =   " https:// "   +   org  +   ".github.io/2"   +   div  +   "-"   +   midterm  +   str (i) \n \xa0\xa0\xa0\xa0 repo_url  =   " https://github.com/ "   +   org  +   "/2"   +   div  +   "-"   +   midterm  +   str (i) \n \xa0\xa0\xa0\xa0 brython_div < =   html.A( "2" + div + "-" + midterm + str (i), href = site_url) \n \xa0\xa0\xa0\xa0 brython_div < =   " (" \n \xa0\xa0\xa0\xa0 brython_div < =   html.A( "repo" , href = repo_url) \n \xa0\xa0\xa0\xa0 brython_div < =   ")" \n \xa0\xa0\xa0\xa0 brython_div < =   html.BR() \n \xa0 \n brython_div < =   html.BR() \n \xa0 \n div  =   "b" \n midterm  =   "mid"   +   div  +   "g" \n group_num  =   9 \n \xa0 \n for   i  in   range ( 1 ,group_num + 1 ): \n \xa0\xa0\xa0\xa0 site_url  =   " https:// "   +   org  +   ".github.io/2"   +   div  +   "-"   +   midterm  +   str (i) \n \xa0\xa0\xa0\xa0 repo_url  =   " https://github.com/ "   +   org  +   "/2"   +   div  +   "-"   +   midterm  +   str (i) \n \xa0\xa0\xa0\xa0 brython_div < =   html.A( "2" + div + "-" + midterm + str (i), href = site_url) \n \xa0\xa0\xa0\xa0 brython_div < =   " (" \n \xa0\xa0\xa0\xa0 brython_div < =   html.A( "repo" , href = repo_url) \n \xa0\xa0\xa0\xa0 brython_div < =   ")" \n \xa0\xa0\xa0\xa0 brython_div < =   html.BR() \n \n \n \n \n \n 期中協同分組報告 \n \n \n 請參考 \xa0 https://github.com/mdecd2024/test-ag1 \xa0 中的 latex 目錄與 downloads 目錄中的 \xa0 https://github.com/mdecd2024/test-ag1/blob/main/downloads/report_github.txt \n 並根據下列教學範例: \n 說明 如何將 41123130 的個人倉儲設為 2a-midag2 分組倉儲的子模組 \n 說明 如何將組員的個人倉儲納入分組倉儲成為子模組 \n 說明 如何在 Replit 維護分組倉儲 \n 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. \n 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 \xa0 miktex-portable.7z \xa0 (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: \xa0 latex_images_github.7z \xa0 (需要密碼) \n 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf \xa0 or \xa0 local \xa0 download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) \n 英文單字查詢: \xa0 2021_odoo_reading.html \n 有關 Codespaces 使用 \n 由於 Github Codespaces 免費帳號目前每月 可以使用 120 core hours , 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. \n 使用 Gitpod 維護倉儲與網站 \n Gitpod \xa0 與 Codespaces 類似, 也是採用 Visual Studio Code 網際介面, 可讓使用者維護位於 Github 的倉儲, 只是個人的 cd2024 倉儲, 以 Github 帳號登入 Gitpod 之後, 可以直接維護, 但是分組網站是從 Github Classroom mdecd2024 帳號下派任, 與 Replit 環境維護分組網站的方法相同, 必須自行建立 .ssh 下的 id_rsa 與 config, 差別是一旦在 Gitpod 導入的分組網站 SSH 管理權限, 不會像 Replit 免費帳號下, 系統會定期刪除免費帳號使用者的 .ssh 目錄. \n 在 Gitpod 導入 Github 倉儲後, 路徑位於 /workspace/ 目錄下, 但是 .ssh 目錄則位於 /home/gitpod/.ssh, 當使用者執行 cd 則會進入 /home/gitpod 目錄, 且使用者在 Gitpod 的 Dashboard 可以從 \xa0 https://gitpod.io \xa0 進入. \n 說明 使用 Gitpod 維護個人網站 \n 說明 使用 Gitpod 維護分組網站 \n 電腦教室中的協同設計 \n cd2024 起, 電腦輔助設計室中的每一台電腦已經各自擁有一個外部 IPv4 網址, 因此各組員可將個人倉儲與分組倉儲 git clone 至隨身碟, 利用 Token 或 SSH session 授權維護倉儲與網站內容. \n 如何利用 Classic Token 授權維護倉儲與網站 \n ODOO 參考資料 \n https://www.google.com/search?q=sap+vs+odoo \xa0 (與 SAP 及 ODOO 有關的搜尋) \n 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf \xa0 or \xa0 local download \xa0 (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) \n 英文單字查詢: \xa0 2021_odoo_reading.html \n 將組員的個人倉儲設為分組倉儲子模組 \n cd2024 課程希望將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站, 設定的指令為: \n git submodule add 組員的個人倉儲網址 組員的學號 \n 例如: 假設組員的 cd2024 個人倉儲位於: https://github.com/scrum-1/cd2024, 且該組員的學號為 41123299, 則該組員必須在進入該組的倉儲目錄後, 執行: \n git submodule add https://github.com/scrum-1/cd2024.git 41123299 \n 如此, Github 帳號為 scrum-1 的組員, 其個人倉儲就會設定為分組倉儲的子模組, 而且是以其學號命名此一子模組的目錄名稱. 這樣設定的好處是: 各組員可以自行管理個人的課程倉儲與網站, 也就是位於其 Github 帳號下的 cd2024, 並且自行決定要整合到分組倉儲與網站的版本. 也能將自己在課程網站的資料, 直接用連結導入分組網站, 無需額外將資料搬進分組倉儲. \n 另外一個使用 Github Classroom 派送分組倉儲的好處, 是 mdecycu 自動成為各分組倉儲的管理者之一, 若各組在改版或解決衝突的過程發生問題, mdecycu 可以協助處理. \n 一旦分組倉儲帶有以各組員學號作為子模組之後, git clone 倉儲必須使用: \n git clone --recurse-submodules 加上各組的倉儲 URL \n 以第一組期中分組倉儲的 git clone 為例, 並且使用 putty session 名稱 github.com: \n git clone --recurse-submodules git@github.com:mdecd2024/2b-midbg1.git \n 而且若要在分組倉儲中更新各組員的子模組版本, 則必須更換目錄到該組員的學號目錄中並且使用 git pull origin main, 才能取下該組員其 cd2024 個人倉儲的最新內容. 取下組員資料後, 若要新增提交推送, 則必須再更換目錄回分組倉儲後才能執行. \n 有關 LaTeX 轉 pdf \n 在 Windows 環境, 說明 如何利用 LaTeX 協同建立分組報告 \n 使用 \xa0 Github Actions \xa0 執行轉檔: \xa0 https://github.com/mdecd2024/test-ag1/blob/main/.github/workflows/main.yml \n 倉儲中的 latex 目錄: \xa0 https://github.com/mdecd2024/test-ag1/tree/main/latex \n 利用可攜程式編譯 LaTeX \n 下載 \xa0 miktex-portable.7z \xa0 (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) \n 下載 \xa0 latex_images_github.7z \xa0 (需要密碼) \n 協同產品設計實習分組期中報告 LaTeX 範本: \n 下載 \xa0 cd2024_midterm_report_latex_ex.7z \n 設定網誌 \n 利用 [OBS] 加上廣播系統錄製的: \xa0 如何設定個人倉儲中的 Pelican 網誌 \n 設定網誌Odoo PLM 功能 \n 簡介 Odoo PLM 用法 \n 設定個人網誌系統 \n 利用 \xa0 https://github.com/mdecycu/cmsimde_site \xa0 建立的網站, 其動態網站資料位於 config/content.htm, 轉換完成的靜態網站資料位於 content 目錄中. \n 網誌的原始檔案位於 markdown 目錄, 所使用的網誌系統為 \xa0 Pelican , 轉換完成的網誌內容則位於 blog 目錄. 將 markdown 網誌轉為網誌的指令為: pelican markdown -o blog -s local_publishconf.py 表示使用了 local_publishconfig.py 設定, 其餘與 blog 有關的設定檔案還有: \n pelicanconf.py 與 publishconf.py 等. \n 為了順利完成上述個人課程網站的網誌設定, 必須根據各用戶所使用的 github 帳號對這三個 .py 檔案進行設定. \n OnShape 帳號 \n 若網路順暢, 可以登入 \xa0 https://onshape.com \xa0 利用 \xa0 MKCad Library \xa0 或 \xa0 VEX Part Library \xa0 零件程式庫建立產品系統模型. \n CoppeliaSim \n CoppeliaSim 4.5.1 rev1 for IPv6.7z \xa0 (169MB, password required to download) \n 可以結合可攜程式環境: \xa0 portable_2024.7z \xa0 (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 進行機電系統設計與模擬. \n 模型簡化 \n 為了讓機電產品能在 CoppeliaSim 動態場景中順暢模擬, 各零組件必須有效進行簡化, 此一零件簡化過程如何後續對零組件進行應力或其他動態系統分析之前, 必須先簡化零組件外型後再進行網格化的應用相同. \n 針對以上課程內容, 請利用以下留言系統進行討論: \n', 'tags': '', 'url': 'w3-2.html'}, {'title': 'w4', 'text': '本周為協同產品設計實習的第四週, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時若導入 Source Tree 協助各組員更清楚看到倉儲改版架構, 另外 Git Branch 的應用. \n \n 教學影片分組整理並自評 \n \n 假如你好奇這個概念哪裡來的: 請參考 反思一 \xa0 and \xa0 反思二 . \n 對於事不關己或者不明白為何團隊中的成員 (這裡指教與學的相關人、事與物), 總讓人提不起興趣, 但若能在過程中找到主要在乎的角色、任務或者緣由, 或許就能從應付著手, 一直到終於了解天下沒有白吃的午餐, 所有的努力付出, 終究不會白費. \n 此外, 假如想參考先前學長推甄研究所的相關資訊, 請利用 Team code: n9k585c 進入自行查看. \n \n w4 2a 分組任務 \n \n 請各組自行搜尋前面已經發布的教學影片, 分別 \n \n 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 \n 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 \n 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 \n \n \n Github 個人與分組倉儲的維護方式 \n \n 個人的倉儲名稱為 cd2024, 而期中的分組倉儲位於 mdecd2024 帳號下, 以2a 開頭, 加上 "-" 之後再補上 midag + 組別, 且各組員的 cd2024 個人倉儲必須設為各分組倉儲的子模組, 目的在各組員可以自行管理並維護自己的課程倉儲, 並決定要引入分組倉儲的內容版次. \n 各組員與分組倉儲的資料, 包括文字資料 (含 LaTeX 報告章節資料)、零組件檔案、零件工程圖或組立圖檔 (含 BOM 與爆炸圖), 以及目前正在整理的教學影片, 或者是各學員將操作流程錄製成的影片或 Wink 資料. \n \n 第一種介紹的倉儲維護方式 - Replit \n \n 有關 Replit 的開發歷史, 可以參考 這裡 與 ChatGPT 的對話內容. \n Replit 目前所提供的免費帳號, 雖然沒有太多的運算資源, 但並沒有使用時間的限制, 因此若能利用 python3 main.py 執行動態網站, 而且利用 python3 main2.py 執行靜態網站, 只要區分開動態網站與靜態網站的使用, 就可以順利在 Replit 上維護個人與分組的網站內容. \n 下載 \xa0 main2.txt \xa0 與 \xa0 static.txt , 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. \n 說明 如何在 Replit 檢視靜態網站 教學影片 \n 說明 如何下載 replit_main2.7z 並在倉儲中建立兩個檔案 教學影片 \n 使用 Replit 維護個人網站時, 可以在登入 Github 後, 連線到 Replit 取得雙方認證, import 個人 cd2024 倉儲後, 經過改版就可以將資料推向 Github. \n 但目前免費 Replit 帳號僅允許開啟一個 Web server 埠號之外, 並無法將一個 Replit 延伸授權至兩個 Github 帳號, 因此若在個人的 Replit 帳號中 import 分組網站, 必須自行設定與 Github 帳號的推送授權, 也就是利用帳號下的 token 或 OpenSSH keys 設定. \n 首先考量在 Replit 導入的倉儲使用 token 是否可行, 答案是: 不可, 原因是: 任何人只要透過 \xa0 https://replit.com/@wcms/cd2024?v=1#.git/config \xa0 就可以看到免費帳號下的任一個倉儲的 .git/config, 若其中帶有個人帳號授權的 token, 任何人都能用來對此倉儲進行改版. \n 因此剩下的方案就是採用 OpenSSH 的 keys 設定, 在各自的 /home/runner/.ssh 中配置 config 與 id_rsa, 並將 id_rsa 對應的公鑰登錄到 Github 帳號下. \n 其中由於 Replit 與 Github 都支援 IPv4 網路協定, 因此 config 設定為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n Host github.com \n User git \n Hostname github.com \n \n \n \n \n \n \n \n 上述 config 設定檔案表示, Host 名稱即為 Windows 環境使用 Putty 設定時的 session 名稱, 因此 <https://replit.com/@wcms/cd2024?v=1#.git/config 若採用 OpenSSH 協定對 Github 連線, 則必須將原本的: \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n [remote  "origin" ] \n url = https: //github.com/mdecycu/cd2024 \n fetch = +refs/heads/<em>:refs/remotes/origin/</em> \n \n \n \n \n \n \n \n \n 改為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n [remote  "origin" ] \n url = git@github.com:mdecycu/cd2024 \n fetch = +refs/heads/*:refs/remotes/origin/* \n \n \n \n \n \n \n \n 上列的 "url = git@github.com:mdecycu/cd2024" 表示將透過 SSH (Secure SHell) 協定, 使用 git 作為遠端登入的帳號, 並且根據 config 中的 Host 設定做為代表字串, 連線到 Hostname, 也就是 github.com, 登入後, 利用 id_rsa 與 ":" 後的 mdecycu 帳號下的 OpenSSH 登錄的 public keys 進行比對, 若吻合, 則可以授權對旗下的 cd2024 倉儲進行改版. \n 只不過 Replit 免費帳號下的 /home/runner/.ssh 會在每次雲端系統整理的時候被系統刪除 (原因不明, 有可能是用來區分付費帳號與免費帳號的使用權限), 但是在系統刪除此一授權的區間, Replit 免費帳號使用者可以透過將設定在 /home/runner/.ssh 目錄下的 config 與 id_rsa 下載到 USB 隨身碟, 一旦發現分組倉儲下的授權被系統移除後, 再利用動態網站將 config.txt 與 id_rsa.txt (因為內建的網站允許 .txt 檔案上傳) 傳到 downloads 目錄下, 然後再利用 python3 ssh.py 將此兩個授權資料放到正確的 /home/runner/.ssh 目錄下, 並設定正確的 id_rsa 檔案存取權限 (必須移除 other 與 group 的 rwx 權限) \n 上述用來搬遷 (move) config.txt 與 id_rsa.txt, 並設定 id_rsa 檔案屬性的 ssh.py 程式如下: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n \n \n \n import   os \n if   not   os.path.exists( "/home/runner/.ssh" ):  \n \xa0\xa0\xa0\xa0 os.makedirs( "/home/runner/.ssh" )  \n os.system( "mv ./downloads/id_rsa.txt /home/runner/.ssh/id_rsa" ) \n os.system( "mv ./downloads/config.txt /home/runner/.ssh/config" ) \n os.system( "chmod og-rwx /home/runner/.ssh/id_rsa" ) \n \n \n \n \n \n \n \n 其中的 os 模組導入後, 可以利用 os.system() 執行系統指令, 且最前面的 if 迴圈可以檢查是否存在 .ssh 目錄, 若已經被系統刪除, 可以透過 os.makedirs 建立此一目錄. \n \n 第二種介紹的倉儲維護方式 - Codespaces \n \n 位於 \xa0 https://github.com/codespaces , 是 Github 帳號下個倉儲的延伸功能, 每一個免費 Github 帳號每個月有 120 core-hours 的使用限制, 每一個免費 codespace 最小配置 2core, 可以提升至 4core. \n Codespaces 的網際介面為 Visual Studio Code, 支援多終端機、多埠號伺服, 且可從各倉儲的 Code 頁面中直接啟動, 並直接使用 Github 帳號的管理授權, 因此使用者登入 Github 帳號後, 可以直接利用 Codespaces 管理個人與分組倉儲, 無需額外再設定倉儲的管理授權. \n 在 Codespaces 執行動態網站的指令為 python3 main.py, 而執行靜態網站則必須從表單新增一個終端機, 然後利用 python3 -m http.server 執行靜態網站, 一旦網站啟動, Visual Studio Code 就會將內埠號轉為 443 並且利用編碼產生伺服器的網路符號名稱. \n \n 第三種介紹的倉儲維護方式 - Gitpod \n \n 位於 \xa0 https://gitpod.io , 是一套類似 Codespaces 的雲端 IDE 服務系統, 可以直接採 Github 帳號登入, 免費使用授權時間為每月 50 小時, 若採 Github 帳號登入, 則可以直接導入該帳號下的個人倉儲進行維護. \n 但是若導入分組倉儲, 則必須自行設定推送授權, 由於 Gitpod 並無像 Replit 帳號下的固定連線網址, 因此前述取得對分組倉儲的授權, 可以採 token 與 SSH 等兩種方式, 但目前並未測試是否設定完成的 /home/gitpod/.ssh 目錄, 是否會遭系統刪除. \n Gitpod 與 Codespaces 相同, 支援多終端機 (Terminal) 與多埠號, 使用者可以同時執行個人與分組倉儲的動態與靜態網站. \n 在 Gitpod 執行動態網站的指令為 python3 main.py, 而執行靜態網站則必須從表單新增一個終端機, 然後利用 python3 -m http.server 執行靜態網站, 一旦網站啟動, Visual Studio Code 就會將內埠號轉為 443 並且利用編碼產生伺服器的網路符號名稱. \n \n 第四種介紹的倉儲維護方式 - localhost \n \n localhost 採用的是 \xa0 portable_2024 \xa0 可攜程式系統, 啟動後, 可以用來執行個人與分組的倉儲維護, 只是若在 Windows 系統可以選擇較簡單的 token 綁定授權, 或者使用 Putty 設定的 SSH 使用授權, 唯一必須注意的是, Putty 所建立的 session 資料會直接登錄到操作系統的登錄檔案 (Registry), 使用者必須將此 session 以 .reg 的格式匯出, 存在隨身碟, 並在每次要使用此一授權時, 以滑鼠在實體檔案路徑下的 my_putty_session.reg (不能使用虛擬的檔案路徑, 例如: 不能點擊位於 Y: 目錄下的 .reg 登錄設定檔案) \n localhost 中的可攜程式系統還帶有 CoppeliaSim、NX 可攜與啟動批次檔案、ShareX、Wink 以及 Solvespace 等檔案, 其中的 CoppeliaSim 用於控制系統設計與模擬, 而 NX 則用於各組員協同繪製目標產品的零組件, ShareX 與 Wink 則用來建立操作流程影片, Solvespace 則可用於平面機構模擬以及初步的零組件尺寸規劃用. \n 在 localhost 執行動態網站的指令為 python cmsimde/wsgi.py, 也可以透過 cms.bat 執行上列指令. \n 而執行靜態網站則可以在另一個命令列中, 利用 python3 -m http.server 執行靜態網站, 一旦網站啟動, Python 就以內建的 8000 作為伺服器埠號, 並在 http://localhost:8000 中伺服. \n \n 利用 NX1872 協同繪製零組件 \n \n 註: 目前可下載最新的 NX 版本為 2312.4001, 惟系上授權版本僅配置到 2206, 必須更新授權後才可以支援 2212、2306 與 2312 版本 (每半年發布一個新版本). \n 從電腦輔助設計室中的電腦 C:\\Program Files\\Siemens\\NX1872 取得所需的 NX 套件目錄檔案, 之後將 NX1872 目錄存入隨身碟後, 可利用下列 start_USB_nx1872.bat 啟動. \n 電腦輔助設計室中 C: 安裝 NX1872, D: 則配置 NX2206 與 NX12, 若在電腦教室則可利用下列批次檔案啟動 NX, 若在各自的電腦或隨身碟帶有各版次的 NX 資料, 只需要透過網路取得授權, 就可直接從 USB 中執行各版次的 NX. \n 下載 NX2027_lite \xa0 (需要密碼, 解開後約 8G) \n 使用不同版本 NX 執行繪圖, 該如何協同設計? \n start_USB_nx1872.bat 可以啟動 USB 隨身碟中的 NX1872. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n \n \n \n @echo off \n set Disk=z \n subst %Disk%:  "NX1872" \n %Disk%: \n set SPLM_LICENSE_SERVER=28000@NX_license_server_IP \n set UGII_LANG=english \n set UGS_LICENSE_BUNDLE=ACD11,ACD10 \n set ugii=%Disk%:\\ugii \n path = %ugii%;%path% \n start ugraf -nx \n \n \n \n \n \n \n \n start_cadlab_nx1872.bat 可以利用 C: 安裝的 NX1872 啟動. 必須特別注意的是, 無論使用 USB 或電腦安裝的套件啟動, 相關設定檔案均會存在電腦的 AppData 目錄中. 就 NX1872 而言, 這些設定檔案會存在 C:\\Users\\Admin\\AppData\\Local\\Siemens\\NX1872 中, 使用者必須在啟動可攜時將先前的設定轉存至對應的目錄下. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n \n \n \n @echo off \n set Disk=z \n subst %Disk%:  "NX1872" \n %Disk%: \n set SPLM_LICENSE_SERVER=28000@NX_license_server_IP \n set UGII_LANG=english \n set UGS_LICENSE_BUNDLE=ACD11,ACD10 \n set ugii=C:\\Program Files\\Siemens\\NX1872\\ugii \n path = %ugii%;%path% \n start ugraf -nx \n \n \n \n \n \n \n \n start_cadlab_nx2206.bat 可以利用 D: 安裝的 NX2206 啟動. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n \n \n \n @echo off \n set Disk=z \n subst %Disk%:  "NX1872" \n %Disk%: \n set SPLM_LICENSE_SERVER=28000@NX_license_server_IP \n set UGII_LANG=english \n set UGS_LICENSE_BUNDLE=ACD11,ACD10 \n set ugii=D:\\Program Files\\Siemens\\2206\\ugii \n path = %ugii%;%path% \n start ugraf -nx \n \n \n \n \n \n \n \n start_cadlab_nx12.bat 可以利用 D: 安裝的 NX12 啟動. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n \n \n \n @echo off \n set Disk=z \n subst %Disk%:  "NX1872" \n %Disk%: \n set SPLM_LICENSE_SERVER=28000@NX_license_server_IP \n set UGII_LANG=english \n set UGS_LICENSE_BUNDLE=ACD11,ACD10 \n set ugii= "D:\\Program Files\\Siemens\\NX 12.0\\ugii" \n path = %ugii%;%path% \n start ugraf -nx \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'cd2024 2b 3 如何設定 Github 帳號的雙重認證', 'text': '影片字幕 \n \n \n 影片敘述 : \n 因為github政策更改，所以所有用戶必須在時限內雙重認證，不然將會被github鎖定mail，所以本影片利用綁定智慧手環、手機下載 Authy 的免費 Apps ，幫變綁定與認證github驗證碼與成功雙重驗證等等 \n \n cd2024_2b_3_如何設定 Github 帳號的雙重認證.txt 逐字稿 txt 丟至 downloads \n 好所以雙重認證啊其實就是 你在電腦上要登入的話 比方說我這個字所以能夠登入啊 我是已經通過他的雙重認證 查驗 所以你要設定的話你 你必須要登入到github 我就第一次當然不可能雙重認證 然後你進來就要趕快跑到這個帳號 帳號的設定區 然後找到他的這個密碼跟認證這一個 項目 passwords這個是密碼 authentication是認證 然後你給他點進來 然後他這個內建底下這邊啊他這個應該是沒有啟動了 雙重 雙重認證 然後你給他啟動的話像我是綁定 我這個是綁定到 我的手錶 假如你有智慧手錶跟手機可以連的話 你就可以安裝這個 只有這個是免費的 Ok只有這個是免費 那手機也可以安裝這個叫你要的話 你手機就 搜尋一下這個authy app 然後你手機也可以用 OK 好那只有這一個套件是免費可以 把那個密碼因為你在像我在Apple Watch我是可以把手機上的這一個apps 安裝在手錶上 所以你就只要帶手錶不需要帶手機 就這樣 好所以你聽到這裡面啦我們想要讀一下 因為他這邊即便是簡體中文啊 他還是英文啊所以你看 他這邊怎麼講 他說從 因為我們上學期就知道了嘛 從2023的3月 到年底 逐漸的開始強制 所有用戶 都必須要用雙重認證 所以你只要有以前舊的帳號一定記得要趕快設因為他不知道什麼時候 OK 他這裡啊給你45天啊 我給你45天因為你建帳號之後45天內你一定要趕緊把它弄起來沒有的話就進不去了 那舊帳號我就不曉得他的他的policy怎樣然後你的帳號因為沒有雙重認證被鎖定 你只好重建 重建的部分不能用原來的那個email就比較麻煩 因為他每一個email只能 在這個github他們上登記一次 然後那他的使用就是除了連到這邊之外 他其實是利用 利用這一個二維條碼所以你只要看他下面的說明啊 有沒有 這個是我們剛講的帳號下的設定 然後選擇到密碼跟認證 好然後在這個區域在這個區域啊 你點選說我要啟用 雙重認證 英文的話是enable 那你假如 知道這個是啟用之後啊 他這邊就會出現一個二維條碼 所以這個二維條碼你就必須要用你的 手機 打開你的mobile意思就是給他的mobile裡面他會有一個 相機的選項 然後拍這個二維條碼 然後他 基本上他就會秀出啊 你可以輸入到github的 數字 就這樣 然後一旦設好之後很重要的一點啊 好像這個就是二維條碼然後你說那麼完之後很重要的一點啊你一 要下載這一個 回覆的這個字串 他叫做recovery Codes 萬一你的手機壞掉 或者是你的手機不見 你沒辦法用啊因為這個時候你就要靠這個回覆嗎來 取回帳號 就這樣啊這個回覆嗎你要嘛把它存在隨身碟要嗎把它同時送到你 遠端的 比較常用的電子郵箱 那保證說 最後 萬一相關的設定都在手錶或手機上的不見了你還 可以拿這一串是一堆一堆這個編碼的數字加上 來取回你的這個帳號 而且你一定要 把它下載否則它是上面會有一個選項他說你存了之後啊你說我已經存 我的回覆碼 然後這個時候你才可以把兩段因為他很害怕萬一你的這一個兩段式 認證出問題的話這個帳號形同是沒有任何人可以登入 那假如你是付費的話你還可以請他幫你處理 我要去打電話也許要從你的這個帳號因為你付費的他有認證碼 信用卡或者用什麼樣式用什麼方式來付錢對吧你說我就是 也許還可以拿回來但是因為我們是免費的 免費帳號是沒有這個金流的部分所以只靠這一個回覆碼來取回你的認證 好像我們這個影片就可以把它存起來 然後是在這裡 \n', 'tags': '', 'url': 'cd2024 2b 3 如何設定 Github 帳號的雙重認證.html'}, {'title': 'cd2024_2b_2_如何從 Replit Account 設定 Connect 連結到 Github', 'text': '\n \n 影片敘述 : \n 本次上課內容與github和replit息息相關，如果需要使用replit協同、同步更改github上的內容，就需要利用本影片的步驟，進行github account 上的設定與 replit 去做連結，使其可以相互信任。 \n cd2024_2b_2_如何從 Replit Account 設定 Connect 連結到 Github.txt 逐字稿 txt 丟至downloads \n 開始啊 我們就連到我登入這裡你必須要登入到 你必須登入到github 然後同時啊 登入到replit 所以你必須要啊先把兩邊把它連起來 意思就是說你要跑到你的 replit的這個帳號下 這是你replit的帳號 你要點選他的account 這是你帳號下面的這個帳號 設定 所以我點選這個的話我目前啊 在底下這裡其實我已經有連結了 兩邊能不能信任 靠的就是這個連線的服務 就是這個 假如你已經出現disconnect 表示這一個你已經做過 假如你是出現connect表示還沒有連結 最假如你本身的github是對應到connect 你就給他點下去 他會在你的電腦安裝一個應用程式 Ok表示你授權 可以兩邊可以互通 互通之後的帳號就會長這樣 你想要連結到帳號下的設定 OK 那他底下這邊就有一個應用程式 這個是帳號 在整合區 Integration是整合的意思 他底下他就有一個Applications 去找你兩邊的這個信任是成功的 你點選這個Applications他就會出現這個 所以你假如有Application下面有replit 表示你的github跟replit兩邊是信任 意思就說你待會假如吧 倉儲啊輸入到你的replit 改版完是可以推回來 這個就是我們要的 我說這個是第一部所以我們確定有這個之後啊 我們待會再來做inport的動作所以我們這個小影片我們先把它 拍下來ok所以我們小影片這一小段喔 我們先拿 \n', 'tags': '', 'url': 'cd2024_2b_2_如何從 Replit Account 設定 Connect 連結到 Github.html'}, {'title': 'cd2024 2b 4 說明如何將倉儲 import 至 Replit 改版後推回 github', 'text': '\n \n \n 影片敘述 :\xa0 \n 在本影片中，老師講述了如何在replit創造github的專案，詳細的講述每個指令的功用與意思，並敘述基本的指令與如何進行維護github的倉儲，說明如何將倉儲 import 至 Replit 改版後推回 github。 \n \n cd2024 2b 4 說明如何將倉儲 import 至 Replit 改版後推回.txt\xa0 逐字稿上傳至 downloads \n 逐字稿\xa0 \n 所以我們這邊必須要先知道就是說我們用的這一個 tempreat就每一個人現在其實內容都一樣 但是你必須要 想辦法在replit上面 來編輯因為你在近端的話也可以我們就要設key 那個我們後面才會提到因為你在協同的時候 不見得所有人都能上網 OK 意思就說他可能某一個時段他根本不用上網 我還是可以做 把我提交了幾次之後 等到我能上網的時候我再把他推送 那你中間的改版啊可能8個人到時候你是需要合併了 那個合併或者解決衝突啊其實才是協同的一個問題 那你之前上電腦輔助設計你應該有碰到 只是說在協同的時候啊 應該解決衝突的這個機會更多所以你必須要對這個系統有一點 有更多的了解 比方說所謂動態網站的資料 Ok 其實是位在 Config Content HTM這個檔案 轉換完成的靜態資料是位在content的這個目錄下 這是第一個要知道了 那之前 其實我們用蠻久了齁 另外這個網站的原始檔是位在markdown 所使用的網誌系統我們用的用python寫的這個早就在裡面 只是我們之前都沒有 特別把他提出來也沒有要求你要寫我那就這學期沒有考試喔 重要的是每個禮拜你都要有進度註記 那這個就 其實跟考試是一樣啊 看你東西有沒有做出來你8個組員反正有沒有貢獻其實你的 這個組員都很清楚啦 所以用的這個轉換完成的這個網頁就位在blog 就好像我們現在看的 我們看的這個網址 這個是我們倉儲的網址 對應的網站網址 然後你只要打blog他就會出現 底下從indesk假如我們把這個 直接打到這個blog 他就會有一個 Indesk的網頁來派送所以我們打到這邊這個就是你的 網址 也就是內容管理的網址再加上blog我們打看看 喔他就跑到這個外面這一頁 那我們現在就是要教你怎麼去設定他 讓你可以有這樣的一個連結 這個時候還是一樣回到我們的 這個倉儲裡面 所以你現在假如正在看你的這個markdown 基本上還沒有inport進來嗎 Ok所以這裡變成說好那我們已經有設定兩邊連線我們這邊要 怎麼把他弄進去 我們現在 已經登入到replit Ok而且我們要確定 這個連線的部分啦已經完成 意思是說你 兩邊的服務 待會我們inport到replit改版完是推的回去的 Ok我們先來看 所以我們就要從create可以一個專案 現在你應該是已經登入到replit 好啦當然剛剛我們一樣也是登入到github 所以這個時候我要建立一個repl 好謝你點這個create repl 我們是要 從github 所以我們選的是這個 我們並不是一個完全空的我們選的是inport from github你點選這個 馬上會出現你剛剛建的 他馬上 會出現你剛才建的 帳號下的這一個 CD2024 有沒有看到 好所以你就直接在這個打勾說我要 導入的就是這一個倉儲 那這個倉儲因為是用python寫的所以你語言這個部分 你必須要把內建的Note點js 要改 改成python Ok然後再 他的表單這邊點選一下 最確認說你是inport from github 然後語言也選了正確的python之後 你在按這一個inport from github 我要再這樣的一個條件下導進來 好像我就按inport他就開始幫你轉了 我們必須要在這個平台上面 安裝模組 他並不知道我們要跑的套件是什麼 欸我們現在要跑的是網際內容管理嗎 那他需要 對應的這一個倉儲 最其實要的是這一串 那怎麼辦因為我們現在就按到 在這裡啊我們我們要打的是這個先看看能不能夠用複製的 所以你第一步就在readme .md這邊啊你看看能不能複製 看看能不能複製 可能真的要打喔當然網頁的部分應該是可以複製 可是要執行啊我們必須要在這個shell 命令區 console Output就是你執行的部分然後這個shell是要執行命令 所以我們第一個就是要先把這個檔案啦設定可以執行 那我們先想辦法把這個chmod u+x init_replit 底線那其實他那個init_replit是一個我們已經安排在裡面的檔案 好那我們看能不能把它貼上 好他會問你說到底 有沒有 授權給這個網頁 你可以把複製的部分檔案貼上來我說可以 他就貼上來他至於這個指令是什麼意思 這個指令是要跟我要改變啊檔案的屬性 Ok空一格 後面就是他的選項 U代表的是user x代表是執行 所以使用者要讓他可以加上執行的屬性 針對的是哪一個檔案呢針對的是這個檔案 所以這個指令一執行這個檔案原來不能執行馬上就可以使用者馬上可以執行 不知道裡面有東西改變了他會重新載入這個 shell的部分 好然後接著 就是執行他的執行一定要有 現在所在的目錄 下面的這個你怎麼沒有打前面的這個點加斜線他不會他不知道你要執行哪一個檔案 好這樣的話他就會幫你安裝模組 Ok意思就是說我們要按這個run之前你就必須要 先根據 這readme.md下的檔案的這兩個步驟 而且要在shell面執行 好那一段 他這裡全部執行完的話 他就會回復到 回復到他的這個回應 那這個回應的部分我們假如要把上面的已經執行完的訊息啊 要把它清除的話我就打clear clear在Linux的一個指令 清除畫面的意思 Windows下面cls是一樣的 我因為我們家有在Windows有沒有 我們有時候在這裡面我們有一些畫面 假如在Windows你要把它清除是CLS Clear scream 是Windows dos的指令 因為是Windows dos先出來 不好意思用同樣了 cls 一樣清除畫面的意思 我說剛剛我們打的是CLS 這個是在命令列 假如畫面就叫CLS然後在linux的話 他是叫clear 因為他有很多視窗你要在這個視窗上你滑鼠就要點這邊他這裡要變黑的 你現在在這裡 你案enter是作用在這裡 是作用在這個小頁面上 那我們為了要執行他 你必須要滑水點在這個他才知道所以這個會變黑的 好那一案enter他就會清除畫面 安裝的所需模組之後你的run應該就有作用 撒花之後他就開始 在你剛才安裝的這些模組的平台 環境中來執行執行哪一個 其實他是執行main.py 那我怎麼會知道耶 好那這邊有一個設定 你假如吧 隱藏的檔案秀出來 我再一次喔 在這個檔案區有沒有那個檔案區有時候會不見喔 有時候會不見 給你按這個他就跑出來 這裡這個 好那這個檔案區的 顯示這邊啊有一些檔案是隱藏起來 這個是專門看要不要秀出這個 檔案的顯示 有一些檔案他是隱藏起來 假如你點選這個顯示隱藏檔 就是顯示碼 隱藏的隱藏檔案一點他的話 底下有兩個重要的檔案 這兩個設定檔config file就是設定檔 其中很重要的是這個檔 點replit 好那意思就說你按run到你他做了什麼你點他就知道了其實你點run 你點run啊其實他就是呼叫python3 main.py 就啟動那main.py是什麼 main.py其實是一堆 執行程式所以我們把main.py帶出來這裡面 因為他這裡面會牽涉到兩層 兩層的啟動這個 是內容管理裡面 那我們必須要知道說原來他就是透過 python3來執行就好了 這是我們編寫的網際內容管理系統 那一旦你 啟動之後 他的這個webview 我們可以把他拉到同一個畫面 待會我們要編輯檔案會比較有比較大的範圍 正把這些小頁面都把它拉到一起 要待會我們其實是要 抓出檔案在這裡來設定 好那我們要設定的部分假如你想要看看我們之前用過的 編輯 你就可以直接用滑鼠右鍵把這個login在分頁中把它打開來 我是這樣意思就說 他就會給你一個網址可是這個網址對你來講 沒有人可以知道你現在這個網址是什麼 這表示說你講的是一個人使用的話 你不需要去 把設定的這個密碼 用sercret代替不用你就直接用admin就好了 這個小寫的admin 就是跟近端編輯是一樣的 因為這一串就是保護你 admin admin小寫這個就是管理者的密碼 被你admin你就直接進去啊 那你要讓其他的人來分享 分享這個編輯 admin其實也可以 但是萬一你這個 連結的部分表說你現在 把這一串連結 劃到不同了 瀏覽器上面 那我這邊 我有登登入所以不行你可以試試看 這一串連結只要知道的人就可以用admin進來編輯 簡單講就這樣 好所以你應該馬上可以 編輯這一串 你的網頁在哪裡啊 從剛剛設的就知道啦 我們剛才是在這個帳號下的倉儲對吧 然後我們倉儲裡面有建一個CD2024 所以這個是你的倉儲好了把它copy下來 那我們剛才編輯的這裡面我們填入倉儲的位置 網頁我們假如自己知道的話自己拼出來假如你直接想要從裡面copy 也可以 進到setting 然後進到pages 這個就是你的倉儲 是你的網頁 好這個把他copy過來 copy一樣 把它放到你的網頁去 可是問題來啦 網誌跟簡報呢你必須要想辦法在這個連結後面加上blog 加上review 可是你假如直接用剛才copy的那個網址 你把它貼上來之後 你在打blog 那這樣沒有辦法變成 的連結對不對 那這裡要怎麼辦 我想要有前面這一個網頁的純字串我不要你 附加html的資料 那怎麼辦 我們就可以回來回來 然後把這個刪掉 問題是我們這個上面複製的部分要漂白 那通常漂白可以跑到這裡 這個區域因為這個是純網頁所以你把它貼上來 複製 html連結就不見 這個時候你不要用OK啦因為這裡面其實是讓我們放 程式碼的地方只是我們要利用這個網頁的表單 把附加的超文件刪掉這個時候你再貼回來他就是乾淨的字串 我說這個這個做法一定要把它學起來當然你也可以回到 Windows的編輯器來漂白只拿到他的這個字串所這個時候啊你想要 畫面直接在打blog在案enter 然後他就ok 不然的話你還要進入這個超文件編輯在那邊搞半天 所以這裡面變成說通常這個是我的做法 所以是這樣的話你的 簡報就是純文字 再加上review 這樣的話你就可以把你對應的about裡面的這些資料都把它填好 OK 那至於底下這個跟我們不相干的我們就可以把它刪掉 然後再把他按safe 至於我們上面這個有關Cmsimde的說明我們把它寫在第二頁 我不要說這個SMAP就是 你按的話他會按到幾次列出目前的所有 因為我們現在都是一階的嗎所以你可以選他 他就會show 這個部分 我們要改config說你現在想要改config 要改這個頁面 標題 你就按config Ok然後我們這邊我們是 所以我自己去 是我的帳號 cd2024 send 這個時候我要把現在這個版本 我要把它送到我真正的github page 叫他背景上 我就必須要先 按一下convert 我要他轉成靜態 這個時候再回來 我們現在需要git git的工具在哪裡跑到底下可以來找 你按一下看一下這個裡面他就有git底下他就有git這個小頁 所以他已經知道你從這裡就可以看出我現在有改版的部分就在這裡 我說這個也是replit不斷地在進化對不對好所以我們到這邊來講我們就 我們已經修改 網站標題 而且 而且怎麼樣在about 頁面 填入對應的所以我們剛剛做什麼 我們填入在about頁面填入 正確的 倉儲 網誌 網站連結的這個是每個人都不一樣因為你的帳號不一樣啊 你的github帳號會對應 不一樣的 倉儲的連結網製的連結網站的連結 我們剛剛就做了這些改變這個時候我們把它 讓他提交 提交之後他這邊就會出現這樣 你去看喔 這個就是遠端remo就是遠端 所以他會說update跟遠端同步的就是一個提交 底下我們剛剛提交的那個部分啊 還沒有push 還沒有推到遠端 那我們就推就好了嗎 因為權限剛剛已經建立了嘛所推的時候他就出現這個 你要確認confirm comfirm是確認 確認這一個階段所完成的改版 要不要推上去假如不要就案deny 假如要 後面這個確認確認 他就會推上去因為權限剛才考那個時候已經建立 好所以表示說這個已經上來 表示說我們現在見的這個 已經跑到 目前在轉檔 這個就是剛剛提交的內容 就這樣 待會我們的遠端網站 就會跟動態網站的內容同步 好說我們先把這個影片我們先把它存下 待會我們再來設定完 網誌的部分 \n', 'tags': '', 'url': 'cd2024 2b 4 說明如何將倉儲 import 至 Replit 改版後推回 github.html'}, {'title': 'w5', 'text': '協同產品設計實習的第五週, 教學內容為先前影片整理、分組網誌的統整與 NX 零組件繪圖. \n \n ODOO PLM 論文中英並列任務 \n 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. \n 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 \xa0 miktex-portable.7z \xa0 (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: \xa0 latex_images_github.7z \xa0 (需要密碼) \n 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf \xa0 or \xa0 local \xa0 download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) \n 英文單字查詢: \xa0 2021_odoo_reading.html \n \n 教學影片分組整理並自評 \n 請各組自行搜尋前面已經發布的教學影片, 分別為 \n \n 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 \n 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 \n 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 \n \n \n cd2024 2b 4 說明如何將倉儲 import 至 Replit 改版後推回 github \n \n \n \n cd2024 2a 1 blog setup \n \n \n cd2024 2b 1 建立個人課程倉儲與網站 \n \n \n cd2024_2b_2_如何從 Replit Account 設定 Connect 連結到 Github \n \n \n cd2024 2b 3 如何設定 Github 帳號的雙重認證 \n \n \n cd2024_2b_7_w2 利用 codespaces 維護分組網站 \n \n \n cd2024_2b_6_w2 從第一組空倉儲建立 cmsimde_site 內容 \n \n \n cd2024_2b_5_w2 第一組組長建立 Team 並設定分組倉儲 \n \n \n cd2024_2a_w2_1(41023239楊祐銘) \n \n \n cd2024 2a w2 4 利用 Replit 管理 Github Classroom 分組倉儲(41023239楊祐銘) \n \n \n wcm2024_1a_w3_2_將組員的個人倉儲納為分組倉儲的子模組 \n \n \n \n \n \n 如何統整組員子模組中的協同設計網誌 \n 當各組員每週的協同設計網誌文章放在個別的 cd2024 倉儲的 markdown 目錄中, 只要修改分組倉儲中的 pelicalconf.py, 使用 Pelican 設定中的 \xa0 PATH \xa0 與 OUTPUT_PATH 變數, 指定網誌統整目錄, 就可以在分組倉儲中納入所有組員在子模組中所編寫的協同網誌. \n 實際的設定操作 \xa0 pelicanconf_py.txt , 是利用 pelicanconf.py 中的程式設定段, 將子模組中 markdown 目錄的 .md 動態複製到分組倉儲中的 combined_directory, 並避開分組倉儲與學員子模組倉儲中的 pages 目錄下的 .md 檔案後, 再進行網誌轉檔, 並且所產生的網誌超文件將存入所設定的 blog 目錄. \n 完成設定後的網誌轉檔指令為: pelican -s local_publishconf.py 表示要利用 local_publishconf.py 的設定進行轉檔, 且先前有關 pelicanconf.py 的設定也將導入執行. \n 過程中, 各組員必須將個別的網誌 .md 檔案名稱加上前綴字串, 例如: "學號_" 加上獨一無二的網誌 Slug 字串名稱, 且 Category 使用該組員的學號作為標示. 之後各組統整轉檔時, 才不至於發生相同網誌文章檔案名稱衝突的錯誤, 且從各分組網誌的 Categories 中即可找到各組員所編寫的所有網誌內容. \n \n 利用 NX1872 協同繪製零組件 \n 從電腦輔助設計室中的電腦 C:\\Program Files\\Siemens\\NX1872 取得所需的 NX 套件目錄檔案, 之後將 NX1872 目錄存入隨身碟後, 可利用下列 start_USB_nx1872.bat 啟動. \n 電腦輔助設計室中 C: 安裝 NX1872, D: 則配置 NX2206 與 NX12, 若在電腦教室則可利用下列批次檔案啟動 NX, 若在各自的電腦或隨身碟帶有各版次的 NX 資料, 只需要透過網路取得授權, 就可直接從 USB 中執行各版次的 NX. \n 下載 NX2027_lite \xa0 (需要密碼, 解開後約 8G) \n 使用不同版本 NX 執行繪圖, 該如何協同設計? \n start_USB_nx1872.bat 可以啟動 USB 隨身碟中的 NX1872. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n \n \n \n @echo off \n set Disk=z \n subst %Disk%:  "NX1872" \n %Disk%: \n set SPLM_LICENSE_SERVER=28000@NX_license_server_IP \n set UGII_LANG=english \n set UGS_LICENSE_BUNDLE=ACD11,ACD10 \n set ugii=%Disk%:\\ugii \n path = %ugii%;%path% \n start ugraf -nx \n \n \n \n \n \n \n \n start_cadlab_nx1872.bat 可以利用 C: 安裝的 NX1872 啟動. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n \n \n \n @echo off \n set Disk=z \n subst %Disk%:  "NX1872" \n %Disk%: \n set SPLM_LICENSE_SERVER=28000@NX_license_server_IP \n set UGII_LANG=english \n set UGS_LICENSE_BUNDLE=ACD11,ACD10 \n set ugii=C:\\Program Files\\Siemens\\NX1872\\ugii \n path = %ugii%;%path% \n start ugraf -nx \n \n \n \n \n \n \n \n start_cadlab_nx2206.bat 可以利用 D: 安裝的 NX2206 啟動. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n \n \n \n @echo off \n set Disk=z \n subst %Disk%:  "NX1872" \n %Disk%: \n set SPLM_LICENSE_SERVER=28000@NX_license_server_IP \n set UGII_LANG=english \n set UGS_LICENSE_BUNDLE=ACD11,ACD10 \n set ugii=D:\\Program Files\\Siemens\\2206\\ugii \n path = %ugii%;%path% \n start ugraf -nx \n \n \n \n \n \n \n \n start_cadlab_nx12.bat 可以利用 D: 安裝的 NX12 啟動. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n \n \n \n @echo off \n set Disk=z \n subst %Disk%:  "NX1872" \n %Disk%: \n set SPLM_LICENSE_SERVER=28000@NX_license_server_IP \n set UGII_LANG=english \n set UGS_LICENSE_BUNDLE=ACD11,ACD10 \n set ugii= "D:\\Program Files\\Siemens\\NX 12.0\\ugii" \n path = %ugii%;%path% \n start ugraf -nx \n \n \n \n \n \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '更改個人.md與slug名稱加上個人或群組分組 \n 更新分組倉儲中的分組倉儲 \n cd2024 2a w6 取下子模組, 以及更新學員倉儲內容 \n 1. 教學影片如下: \n cd2024 2a w6 利用 pelicanconf py 整合各組員的網誌 \n 2. 教學影片如下: \n \n \n \n \n \n \n \n \n \n \n \n 教學影片分組整理並自評 \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '協同產品設計實習的第七週, 正值春假期間, 用來回顧課程內容重點. \n \n 從協同設計的架構上, 個人與分組的倉儲中, 總共設計了以下幾種內容的協同模式: \n \n 分組網站內容的協同 \xa0 - 其中包括章節式的網站內容與網誌內容, 可以透過 Python 程式方法整合各學員子模組中的 \xa0 config/content.htm \xa0 以及 markdown/*.md 檔案至分組網站中 \n 分組報告內容的協同 \xa0 - 採用的是 \xa0 Github Actions \xa0 與近端 \xa0 MikTeX \xa0 中的 \xa0 xelatex \xa0 將 .tex 轉為 pdf 的整合過程 \n 分組產品設計的\xa0 PLM \xa0協同 \xa0 - 採用的是 \xa0 Odoo PLM \xa0 模組, 讓各分組可以將網站內容、報告內容視為產品, 從協同架構的訂定作為起點, 完成資料展示作為終點, 逐一將過程的協調、派任與執行方法納入 \xa0 PLM \xa0 系統管理 \n 分組零組件設計的協同 \xa0 - 分別採用 \xa0 Solvespace \xa0 作為鋼球平衡台範例, 讓學員使用 \xa0 Siemens NX \xa0 1872 進行協同零組件繪圖設計, 並將各零件的 .prt 檔案納入各學員的倉儲進行組立, 以便找出最佳的設計分工以及零組件轉檔流程 \n 分組模擬場景設計的協同 \xa0 - 當各分組順利完成鋼球平衡台的零組件轉檔後, 一旦進入 \xa0 CoppeliaSim \xa0 場景後, 必須逐一配置感測器 (Sensors)、致動器 (Actuators) 以及 \xa0 ZMQ RemoteAPI Python 程式, 主要探討如何將此一場景模擬過程在 \xa0 CoppeliaSim XML \xa0 檔案格式與 \xa0 Siemens NXOpen Python \xa0 零件程式檔案間, 找到合用或最佳的協同產品設計模式. \n 分組專案簡報設計的協同 \xa0 - 在上述各產品設計階段所累積的各種資料, 該如何有效整合到專案完成後必須進行的網際簡報中. \n \n \n \n 分組網站內容的協同 \n 各分組網站內容的協同包含: \n \n 章節式網站內容 \n 週記式網誌內容 \n 網際簡報內容 \n \n 其中首先要求各組員必須每週在 cd2024 倉儲中的 markdown 目錄編寫 markdown 網誌文章, 再經由 \xa0 Pelican \xa0 轉檔至 blog 目錄中的超文件網誌. 由於 \xa0 Pelican \xa0 採用 Python 檔案進行設定, 因此可以在轉檔的過程中, 將各子目錄中的組員倉儲網誌集合到分組倉儲中的 combined_markdown 目錄之後, 再指定將網誌超文件轉至各分組倉儲的 blog 目錄. \n 由於分組網誌內容協同時, 所有組員所編寫的 markdown 文章必須存入 combined_markdown 目錄, 因此 markdown 網誌文章檔案的命名不可重複, 且各網誌文章的 Slug 字串將會被當作用來命名轉檔後的超文件檔案名稱, 因此也不能重複. \n 至於當各組員採用 Replit 維護個人倉儲內容時, 可以直接從 \xa0 Replit \xa0 Connect 至 \xa0 Github \xa0 取得維護倉儲的權限, 旦卻無法直接用管理分組倉儲, 因為各組員雖然擁有管理分組倉儲的權限, 但是無法在 \xa0 Replit \xa0 中以免費的組員帳號管理 \xa0 Github Classroom \xa0 所取得的分組倉儲. 而必須動態納入針對分組倉儲的 OpenSSH 管理權限. \n \n 分組報告內容的協同 \n add_to_content_html.py \n generate_pages.py \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': 'cd2024 2a w8 產品協同架構說明 \n \n 協同產品設計實習課程使用網際內容管理系統, 採 \xa0 Github Classroom \xa0 建立分組倉儲, 並由學員自行利用 \xa0 cmsimde_site \xa0 作為 \xa0 Github \xa0 倉儲的引擎目錄, 利用 Python 執行網頁編輯. 之後再轉檔為靜態網頁, 以便利用 \xa0 Github Pages \xa0 所提供的 \xa0 WWW \xa0 伺服器呈現協同產品設計過程的相關多媒體內容. \n 除了章節式的網站外, \xa0 cmsimde_site \xa0 還額外利用 \xa0 Pelican \xa0 管理使用者所建立的網誌, 以及利用 \xa0 Reveal \xa0 管理使用者所建立的網際簡報. \n 在使用者每週的內容管理過程, 由於必須採用 Python 執行網頁編輯, \xa0 cd2024 \xa0 課程採用了四種不同的方法進行, 其中包括 \xa0 Replit 、 Codespaces 、 Gitpod \xa0 以及 localhost. 由於前三者屬於雲端作業, 各有不同的使用規定與免費使用權限, 對於多人協同的產品設計團隊而言, 可以根據各自的喜好與環境選擇合用的網頁編輯工具, 且在多方了解下也可透過實際使用發展中的雲端 IDE 環境, 一窺未來可能的 AI 導引前景.', 'tags': '', 'url': 'w8.html'}]};