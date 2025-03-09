(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{490:function(s,e,t){"use strict";t.r(e);var a=t(7),r=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"git分支-远程分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git分支-远程分支"}},[s._v("#")]),s._v(" Git分支-远程分支")]),s._v(" "),e("p",[e("strong",[s._v("远程引用是对远程仓库的引用（指针）")]),s._v("，包括分支、标签等等。")]),s._v(" "),e("blockquote",[e("p",[s._v("远程分支本质上也是一个指针，指向远程地址")])]),s._v(" "),e("h3",{attrs:{id:"查看远程引用列表与信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看远程引用列表与信息"}},[s._v("#")]),s._v(" 查看远程引用列表与信息")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-remote "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程引用的完整列表")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote show "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程分支的更多信息")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("上面两行命令比较少用，更常见的做法是利用远程跟踪分支。")]),s._v(" "),e("h3",{attrs:{id:"远程跟踪分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程跟踪分支"}},[s._v("#")]),s._v(" 远程跟踪分支")]),s._v(" "),e("p",[e("strong",[s._v("远程跟踪分支是远程分支状态的引用")]),s._v("。它们是你无法移动的本地引用。一旦你进行了网络通信， Git 就会为你移动它们以"),e("strong",[s._v("精确反映远程仓库的状态")]),s._v("。请将它们"),e("strong",[s._v("看做书签")]),s._v("， 这样可以提醒你该分支在远程仓库中的位置就是你最后一次连接到它们的位置。")]),s._v(" "),e("p",[s._v("它们"),e("strong",[s._v("以 "),e("code",[s._v("<remote>/<branch>")]),s._v(" 的形式命名")]),s._v("。 例如，如果你想要"),e("strong",[s._v("查看最后一次与远程仓库 "),e("code",[s._v("origin")]),s._v(" 通信时 "),e("code",[s._v("master")]),s._v(" 分支的状态")]),s._v("，你可以查看 "),e("code",[s._v("origin/master")]),s._v(" 分支。 你与同事合作解决一个问题并且他们推送了一个 "),e("code",[s._v("iss53")]),s._v(" 分支，你可能有自己的本地 "),e("code",[s._v("iss53")]),s._v(" 分支， 然而在服务器上的分支会以 "),e("code",[s._v("origin/iss53")]),s._v(" 来表示。")]),s._v(" "),e("p",[s._v("这可能有一点儿难以理解，让我们来看一个例子。 假设你的网络里有一个在 "),e("code",[s._v("git.ourcompany.com")]),s._v(" 的 Git 服务器。 如果你从这里克隆，Git 的 "),e("code",[s._v("clone")]),s._v(" 命令会为你自动将其命名为 "),e("code",[s._v("origin")]),s._v("，拉取它的所有数据， 创建一个指向它的 "),e("code",[s._v("master")]),s._v(" 分支的指针，并且"),e("strong",[s._v("在本地将其命名为 "),e("code",[s._v("origin/master")])]),s._v("。 Git 也会给你一个与 origin 的 "),e("code",[s._v("master")]),s._v(" 分支在指向同一个地方的本地 "),e("code",[s._v("master")]),s._v(" 分支，这样你就有工作的基础。")]),s._v(" "),e("p",[e("mark",[e("strong",[s._v("笔记：从远程克隆下来的仓库有一个叫"),e("code",[s._v("origin/master")]),s._v("的远程跟踪分支 和 一个本地的"),e("code",[s._v("master")]),s._v("分支")])])]),s._v(" "),e("blockquote",[e("p",[s._v("笔记：“origin” 并无特殊含义远程仓库名字 “origin” 与分支名字 “master” 一样，在 Git 中并没有任何特别的含义一样。 同时 “master” 是当你运行 "),e("code",[s._v("git init")]),s._v(" 时默认的起始分支名字，原因仅仅是它的广泛使用， “origin” 是当你运行 "),e("code",[s._v("git clone")]),s._v(" 时默认的远程仓库名字。 如果你运行 "),e("code",[s._v("git clone -o booyah")]),s._v("，那么你默认的远程分支名字将会是 "),e("code",[s._v("booyah/master")]),s._v("。")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/remote-branches-1.png",alt:"克隆之后的服务器与本地仓库。"}})]),s._v(" "),e("p",{attrs:{align:"center"}},[s._v("图1.  克隆之后的服务器与本地仓库 ▲")]),s._v(" "),e("p",[s._v("如果你在本地的 "),e("code",[s._v("master")]),s._v(" 分支做了一些工作，在同一段时间内有其他人推送提交到 "),e("code",[s._v("git.ourcompany.com")]),s._v(" 并且更新了它的 "),e("code",[s._v("master")]),s._v(" 分支，这就是说你们的提交历史已走向不同的方向。 即便这样，只要你保持不与 "),e("code",[s._v("origin")]),s._v(" 服务器连接（并拉取数据），你的 "),e("code",[s._v("origin/master")]),s._v(" 指针就不会移动。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/remote-branches-2.png",alt:"本地与远程的工作可以分叉。"}})]),s._v(" "),e("p",{attrs:{align:"center"}},[s._v("图2.  本地与远程的工作可以分叉 ▲")]),s._v(" "),e("p",[s._v("如果要与给定的远程仓库同步数据，运行 "),e("code",[s._v("git fetch <remote>")]),s._v(" 命令（在本例中为 "),e("code",[s._v("git fetch origin")]),s._v("）。 这个命令查找 “origin” 是哪一个服务器（在本例中，它是 "),e("code",[s._v("git.ourcompany.com")]),s._v("）， 从中抓取本地没有的数据，并且更新本地数据库，移动 "),e("code",[s._v("origin/master")]),s._v(" 指针到更新之后的位置。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/remote-branches-3.png",alt:" 更新你的远程仓库引用。"}})]),s._v(" "),e("p",{attrs:{align:"center"}},[s._v("图3.   git fetch 更新你的远程跟踪分支 ▲")]),s._v(" "),e("p",[e("mark",[s._v("笔记: 本地的 master 分支 可能 和 远程跟踪分支 origin/master 分叉")])]),s._v(" "),e("p",[s._v("为了演示有多个远程仓库与远程分支的情况，我们假定你有另一个内部 Git 服务器，仅服务于你的某个敏捷开发团队。 这个服务器位于 "),e("code",[s._v("git.team1.ourcompany.com")]),s._v("。 你可以运行 "),e("code",[s._v("git remote add")]),s._v(" 命令添加一个新的远程仓库引用到当前的项目，这个命令我们会在 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/ch02-git-basics-chapter",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git 基础"),e("OutboundLink")],1),s._v(" 中详细说明。 将这个远程仓库"),e("strong",[s._v("命名为 "),e("code",[s._v("teamone")]),s._v("，将其作为完整 URL 的缩写")]),s._v("。"),e("mark",[s._v("远程仓库名本质上是远程URL的缩写")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/remote-branches-4.png",alt:"添加另一个远程仓库。"}})]),s._v(" "),e("p",{attrs:{align:"center"}},[s._v("图4.   添加另一个远程仓库 ▲")]),s._v(" "),e("p",[s._v("现在，可以运行 "),e("code",[s._v("git fetch teamone")]),s._v(" 来抓取远程仓库 "),e("code",[s._v("teamone")]),s._v(" 有而本地没有的数据。 因为那台服务器上现有的数据是 "),e("code",[s._v("origin")]),s._v(" 服务器上的一个子集， 所以 Git 并不会抓取数据而是会设置远程跟踪分支 "),e("code",[s._v("teamone/master")]),s._v(" 指向 "),e("code",[s._v("teamone")]),s._v(" 的 "),e("code",[s._v("master")]),s._v(" 分支。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/remote-branches-5.png",alt:"远程跟踪分支 。"}})]),s._v(" "),e("p",{attrs:{align:"center"}},[s._v("图5.   远程跟踪分支 teamone/master ▲")]),s._v(" "),e("h3",{attrs:{id:"推送"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推送"}},[s._v("#")]),s._v(" 推送")]),s._v(" "),e("p",[s._v("当你想要公开分享一个分支时，需要将其推送到有写入权限的远程仓库上。 本地的分支并不会自动与远程仓库同步——你必须显式地推送想要分享的分支。 这样，你就可以把不愿意分享的内容放到私人分支上，而将需要和别人协作的内容推送到公开分支。")]),s._v(" "),e("p",[s._v("如果希望和别人一起在名为 "),e("code",[s._v("serverfix")]),s._v(" 的分支上工作，你可以像推送第一个分支那样推送它。 运行 "),e("code",[s._v("git push <remote> <branch>")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin serverfix\nCounting objects: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(", done.\nDelta compression using up to "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" threads.\nCompressing objects: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("/15"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nWriting objects: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("/24"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.91")]),s._v(" KiB "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" bytes/s, done.\nTotal "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTo https://github.com/schacon/simplegit\n * "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new branch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("      serverfix -"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" serverfix\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("这里有些工作被简化了。 "),e("strong",[s._v("Git 自动将 "),e("code",[s._v("serverfix")]),s._v(" 分支名字展开为 "),e("code",[s._v("refs/heads/serverfix:refs/heads/serverfix")]),s._v("，")]),s._v(" 那意味着，“推送本地的 "),e("code",[s._v("serverfix")]),s._v(" 分支来更新远程仓库上的 "),e("code",[s._v("serverfix")]),s._v(" 分支。” 我们将会详细学习 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/ch10-git-internals",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git 内部原理"),e("OutboundLink")],1),s._v(" 的 "),e("code",[s._v("refs/heads/")]),s._v(" 部分， 但是现在可以先把它放在儿。你也可以运行 "),e("code",[s._v("git push origin serverfix:serverfix")]),s._v("， 它会做同样的事——也就是说“"),e("strong",[s._v("推送本地的 "),e("code",[s._v("serverfix")]),s._v(" 分支，将其作为远程仓库的 "),e("code",[s._v("serverfix")]),s._v(" 分支")]),s._v("” 可以通过这种格式来推送本地分支到一个命名不相同的远程分支。")]),s._v(" "),e("h4",{attrs:{id:"重命名远程仓库上的分支名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重命名远程仓库上的分支名"}},[s._v("#")]),s._v(" 重命名远程仓库上的分支名")]),s._v(" "),e("p",[s._v("如果并不想让远程仓库上的分支叫做 "),e("code",[s._v("serverfix")]),s._v("，可以运行 "),e("code",[s._v("git push origin serverfix:awesomebranch")]),s._v(" 来将本地的 "),e("code",[s._v("serverfix")]),s._v(" 分支推送到远程仓库上的 "),e("code",[s._v("awesomebranch")]),s._v(" 分支。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("Note")]),s._v(" "),e("th",[s._v("如何避免每次输入密码如果你正在使用 HTTPS URL 来推送，Git 服务器会询问用户名与密码。 默认情况下它会在终端中提示服务器是否允许你进行推送。如果不想在每一次推送时都输入用户名与密码，你可以设置一个 “credential cache”。 最简单的方式就是将其保存在内存中几分钟，可以简单地运行 "),e("code",[s._v("git config --global credential.helper cache")]),s._v(" 来设置它。想要了解更多关于不同验证缓存的可用选项，查看 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/_credential_caching",target:"_blank",rel:"noopener noreferrer"}},[s._v("凭证存储"),e("OutboundLink")],1),s._v("。")])])]),s._v(" "),e("tbody",[e("tr",[e("td"),s._v(" "),e("td")])])]),s._v(" "),e("p",[s._v("下一次其他协作者从服务器上抓取数据时，他们会在本地生成一个远程分支 "),e("code",[s._v("origin/serverfix")]),s._v("，指向服务器的 "),e("code",[s._v("serverfix")]),s._v(" 分支的引用：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin\nremote: Counting objects: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(", done.\nremote: Compressing objects: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nremote: Total "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nUnpacking objects: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nFrom https://github.com/schacon/simplegit\n * "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new branch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("      serverfix    -"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" origin/serverfix\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("要特别注意的一点是当抓取到新的远程跟踪分支时，本地不会自动生成一份可编辑的副本（拷贝）。 换一句话说，这种情况下，不会有一个新的 "),e("code",[s._v("serverfix")]),s._v(" 分支——只有一个不可以修改的 "),e("code",[s._v("origin/serverfix")]),s._v(" 指针。")]),s._v(" "),e("p",[s._v("可以运行 "),e("code",[s._v("git merge origin/serverfix")]),s._v(" 将这些工作合并到当前所在的分支。 如果想要在自己的 "),e("code",[s._v("serverfix")]),s._v(" 分支上工作，可以将其建立在远程跟踪分支之上：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" serverfix origin/serverfix\nBranch serverfix "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" up to track remote branch serverfix from origin.\nSwitched to a new branch "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'serverfix'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("这会给你一个用于工作的本地分支，并且起点位于 "),e("code",[s._v("origin/serverfix")]),s._v("。")]),s._v(" "),e("h3",{attrs:{id:"跟踪分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跟踪分支"}},[s._v("#")]),s._v(" 跟踪分支")]),s._v(" "),e("p",[e("strong",[s._v("从一个远程跟踪分支检出一个本地分支会自动创建所谓的“跟踪分支”（它跟踪的分支叫做“上游分支”）")]),s._v("。 "),e("strong",[s._v("跟踪分支是与远程分支有直接关系的本地分支")]),s._v("。 如果在一个跟踪分支上输入 "),e("code",[s._v("git pull")]),s._v("，Git 能自动地识别去哪个服务器上抓取、合并到哪个分支。")]),s._v(" "),e("p",[s._v("当克隆一个仓库时，它通常会自动地创建一个跟踪 "),e("code",[s._v("origin/master")]),s._v(" 的 "),e("code",[s._v("master")]),s._v(" 分支。 然而，如果你愿意的话可以设置其他的跟踪分支，或是一个在其他远程仓库上的跟踪分支，又或者不跟踪 "),e("code",[s._v("master")]),s._v(" 分支。 最简单的实例就是像之前看到的那样，运行 "),e("code",[s._v("git checkout -b <branch> <remote>/<branch>")]),s._v("。 这是一个十分常用的操作所以 Git 提供了 "),e("code",[s._v("--track")]),s._v(" 快捷方式：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--track")]),s._v(" origin/serverfix\nBranch serverfix "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" up to track remote branch serverfix from origin.\nSwitched to a new branch "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'serverfix'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("由于这个操作太常用了，该捷径本身还有一个捷径。 如果你尝试检出的分支 (a) 不存在且 (b) 刚好只有一个名字与之匹配的远程分支，那么 Git 就会为你创建一个跟踪分支：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout serverfix\nBranch serverfix "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" up to track remote branch serverfix from origin.\nSwitched to a new branch "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'serverfix'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("如果想要将本地分支与远程分支设置为不同的名字，你可以轻松地使用上一个命令增加一个不同名字的本地分支：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" sf origin/serverfix\nBranch sf "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" up to track remote branch serverfix from origin.\nSwitched to a new branch "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sf'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("现在，本地分支 "),e("code",[s._v("sf")]),s._v(" 会自动从 "),e("code",[s._v("origin/serverfix")]),s._v(" 拉取。")]),s._v(" "),e("p",[s._v("设置已有的本地分支跟踪一个刚刚拉取下来的远程分支，或者想要修改正在跟踪的上游分支， 你可以在任意时间使用 "),e("code",[s._v("-u")]),s._v(" 或 "),e("code",[s._v("--set-upstream-to")]),s._v(" 选项运行 "),e("code",[s._v("git branch")]),s._v(" 来显式地设置。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin/serverfix\nBranch serverfix "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" up to track remote branch serverfix from origin.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",[s._v("Note")]),s._v(" "),e("th",[s._v("上游快捷方式当设置好跟踪分支后，可以通过简写 "),e("code",[s._v("@{upstream}")]),s._v(" 或 "),e("code",[s._v("@{u}")]),s._v(" 来引用它的上游分支。 所以在 "),e("code",[s._v("master")]),s._v(" 分支时并且它正在跟踪 "),e("code",[s._v("origin/master")]),s._v(" 时，如果愿意的话可以使用 "),e("code",[s._v("git merge @{u}")]),s._v(" 来取代 "),e("code",[s._v("git merge origin/master")]),s._v("。")])])]),s._v(" "),e("tbody",[e("tr",[e("td"),s._v(" "),e("td")])])]),s._v(" "),e("h3",{attrs:{id:"查看跟踪分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看跟踪分支"}},[s._v("#")]),s._v(" 查看跟踪分支")]),s._v(" "),e("p",[s._v("如果想要查看设置的所有跟踪分支，可以使用 "),e("code",[s._v("git branch")]),s._v(" 的 "),e("code",[s._v("-vv")]),s._v(" 选项。 这会将所有的本地分支列出来并且包含更多的信息，如每一个分支正在跟踪哪个远程分支与本地分支是否是领先、落后或是都有。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-vv")]),s._v("\n  iss53     7e424c3 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("origin/iss53: ahead "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" forgot the brackets\n  master    1ae2a45 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("origin/master"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" deploying index fix\n* serverfix f8674d9 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("teamone/server-fix-good: ahead "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(", behind "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" this should "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" it\n  testing   5ea463a trying something new\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("这里可以看到 "),e("code",[s._v("iss53")]),s._v(" 分支正在跟踪 "),e("code",[s._v("origin/iss53")]),s._v(" 并且 “ahead” 是 2，意味着本地有两个提交还没有推送到服务器上。 也能看到 "),e("code",[s._v("master")]),s._v(" 分支正在跟踪 "),e("code",[s._v("origin/master")]),s._v(" 分支并且是最新的。 接下来可以看到 "),e("code",[s._v("serverfix")]),s._v(" 分支正在跟踪 "),e("code",[s._v("teamone")]),s._v(" 服务器上的 "),e("code",[s._v("server-fix-good")]),s._v(" 分支并且领先 3 落后 1， 意味着服务器上有一次提交还没有合并入同时本地有三次提交还没有推送。 最后看到 "),e("code",[s._v("testing")]),s._v(" 分支并没有跟踪任何远程分支。")]),s._v(" "),e("p",[s._v("需要重点注意的一点是这些数字的值来自于你从每个服务器上最后一次抓取的数据。 "),e("strong",[s._v("这个命令并没有连接服务器")]),s._v("，它只会告诉你关于本地缓存的服务器数据。 如果想要统计最新的领先与落后数字，需要在运行此命令前抓取所有的远程仓库。 可以像这样做：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch --all"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-vv")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"拉取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取"}},[s._v("#")]),s._v(" 拉取")]),s._v(" "),e("p",[s._v("当 "),e("code",[s._v("git fetch")]),s._v(" 命令从服务器上抓取本地没有的数据时，它并不会修改工作目录中的内容。 它只会获取数据然后让你自己合并。 然而，有一个命令叫作 "),e("code",[s._v("git pull")]),s._v(" 在大多数情况下它的含义是一个 "),e("code",[s._v("git fetch")]),s._v(" 紧接着一个 "),e("code",[s._v("git merge")]),s._v(" 命令。 如果有一个像之前章节中演示的设置好的跟踪分支，不管它是显式地设置还是通过 "),e("code",[s._v("clone")]),s._v(" 或 "),e("code",[s._v("checkout")]),s._v(" 命令为你创建的，"),e("code",[s._v("git pull")]),s._v(" 都会查找当前分支所跟踪的服务器与分支， 从服务器上抓取数据然后尝试合并入那个远程分支。")]),s._v(" "),e("p",[s._v("由于 "),e("code",[s._v("git pull")]),s._v(" 的魔法经常令人困惑所以通常单独显式地使用 "),e("code",[s._v("fetch")]),s._v(" 与 "),e("code",[s._v("merge")]),s._v(" 命令会更好一些。")]),s._v(" "),e("h3",{attrs:{id:"删除远程分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[s._v("#")]),s._v(" 删除远程分支")]),s._v(" "),e("p",[s._v("假设你已经通过远程分支做完所有的工作了——也就是说你和你的协作者已经完成了一个特性， 并且将其合并到了远程仓库的 "),e("code",[s._v("master")]),s._v(" 分支（或任何其他稳定代码分支）。 可以运行带有 "),e("code",[s._v("--delete")]),s._v(" 选项的 "),e("code",[s._v("git push")]),s._v(" 命令来删除一个远程分支。 如果想要从服务器上删除 "),e("code",[s._v("serverfix")]),s._v(" 分支，运行下面的命令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" serverfix\nTo https://github.com/schacon/simplegit\n - "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("deleted"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         serverfix\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("基本上这个命令做的只是从服务器上移除这个指针。 Git 服务器通常会保留数据一段时间直到垃圾回收运行，所以如果不小心删除掉了，通常是很容易恢复的。")])])}),[],!1,null,null,null);e.default=r.exports}}]);