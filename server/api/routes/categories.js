
import _debug from 'debug';

const debug = _debug('app:server:api:/categories');

function getList() {

    var data = JSON.stringify([{
        name: 'Undrtone',
        desc: 'Hooking into Spotify, SoundCloud, Rdio and Beats, Undrtone uses the world’s biggest cloud-based services to create a community around music. Undrtone’s a never-ending stream of songs curated for and by you – enabling you to discover and share tunes with your friends, as well as follow tastemakers and artists you love. ',
        url: '/',
        icon: '/images/undrtone.svg',
    }, {
        name: 'TrackingTime | Time Tracker',
        icon: '/images/TrackingTime.png',
        url: '/',
        desc: 'A ton of new features and an all-new user experience. Meticulously designed to make every minute of your time count.'
    }, {
        name: 'Pixsta',
        desc: 'Pixsta is a free Instagram app that provides the best Instagram experience on the PC and Mac. In addition to all your favorite Instagram features including feeds, profile views, comments and ‘likes’, with Pixsta you can now search, share and download photos from Instagram directly on your computer.',
        url: '/',
        icon: '/images/pixsta.png',
    }, {
        name: 'Diaro - diary, journal, notes',
        icon: '/images/diaro.png',
        url: '/',
        desc: 'Diaro is available Online and for Android.  Keep your life moments privately!  Diaro is designed and focused to record activities, experiences, thoughts and ideas throughout your day and browse diary notes from the past in the easiest way.'
    }, {
        name: '知乎日报',
        desc: '知乎日报chrome app版 （第三方）',
        url: '/',
        icon: '/images/zhihu.png',
    }, {
        name: '90 s games',
        desc: `
        Best games collection from the 90 s:
        Pacman
        Mortal Kombat
        Street Fighter 2 Champion Edition
        Super Mario Flash
        Sonic
        Prince of Persia
        Donkey Kong
        Tank 1990
        Pong
        Bomberman
        Metal Slug
        Tetris
        Legend of Zelda
        and many other 90's games
        `,
        url: '/',
        icon: '/images/90game.png',
    }, {
        name: 'Facebook 新闻',
        icon: '/images/facebook.png',
        url: '/',
        desc: '这个 Chrome 应用程序是一个新闻网站、 技术和有关 Facebook 社交媒体博客。该网站的主要重点是 Facebook 的消息，但它也包括趋势、 facebook 的新产品和每周要闻。你会发现有用到 Facebook 新闻源、 邮件、 日历、 事件、 照片、 搜索、 网页和视频的快速链接。Facebook 是一个社会的实用程序，连接与朋友和其他人的工作、 学习和生活周遭的人。人们使用 Facebook 来跟上的朋友。所有版权都属于其各自所有者。'
    }, {
        name: 'Wunderlist - To-do and Task list',
        desc: `
        奇妙清单帮助数百万人记录点子或想法、想要完成的任务和想去的地方。无论是计划旅程，与您的好友分享购物清单或者是同事团队之间的工作项目，奇妙清单让您更容易与所有人协作。您还可以在电话，平板和电脑间无缝同步您的清单，让您能够随时随地从几乎任何设备掌握任务，与您生活同步。

        「奇妙清单，如约而至！」- 极客公园

        The New York Times、Lifehacker、TechCrunch、CNET、The Guardian、Wired和Vanity Fair等多家媒体对奇妙清单进行了报导。
        `,
        url: '/',
        icon: '/images/wunderlist.png',
    }, {
        name: 'Evernote Web',
        icon: '/images/evernote.png',
        url: '/',
        desc: `
        将您所有的想法和经验保存在 Evernote 中，然后通过任一台电脑和手机即可访问。
        Evernote是一款赢得多项大奖的服务，可以把你使用的每部电脑和手机变成你大脑的延伸。你的想法、经历和灵感统统用Evernote保存下来，就可以随时随地轻松访问啦。
        `
    }, {
        name: 'Fireboy和Watergirl',
        desc: 'FIREBOY和Watergirl是相反的，但他们可以做伟大的事情一起，携手共进。帮助他们逃离寺庙，找不到出路。你可以独自玩耍，但它与一个朋友更容易。 关于FIREBOY和Watergirl： 如所提到的在比赛名称，有两个字符：FIREBOY和watergirl。这就像一个障碍当然有，你要跳过去的水，火和泥水坑。人物Watergirl只能碰水和字符FIREBOY只能碰火。还有泥浆，它们都不能碰了一点点。游戏的目标是有FIREBOY和watergirl到最后。你必须非常清楚你现在控制FIREBOY或watergirl，因为它们是完全不同的人物。',
        url: '/',
        icon: '/images/jafgames.png',
    }]);

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(data);
        }, Math.random() * 3000 + 100);
    });
}

function getAds(type) {

    return JSON.stringify([{
        cover: '/images/twitter-header-photo-25.jpg',
        name: 'Undrtone',
        desc: 'Hooking into Spotify, SoundCloud, Rdio and Beats, Undrtone uses the world’s biggest cloud-based services to create a community around music. Undrtone’s a never-ending stream of songs curated for and by you – enabling you to discover and share tunes with your friends, as well as follow tastemakers and artists you love. ',
        url: '/',
        icon: '/images/undrtone.svg',
    }, {
        cover: '/images/background_header.jpg',
        name: 'TrackingTime | Time Tracker',
        icon: '/images/TrackingTime.png',
        url: '/',
        desc: 'A ton of new features and an all-new user experience. Meticulously designed to make every minute of your time count.'
    }, {
        cover: '/images/twitter-header-16.jpg',
        name: 'Writer',
        icon: '/images/writer.png',
        url: '/',
        desc: 'While other writing apps make writing stale and even depressing, Writer seeks to create a nicer and more enjoyable user experience. With a wide variety of options, users get to customize their workspace to suit their needs. Writer keeps a nice balance of performance and design by creating a fast and efficient workflow while maintaining a clean and simple interface. '
    }]);
};

debug('Start listenning');

export default (api) => {

api
    .get('/categories/list/:type/:sortby?', async ctx => ctx.body = await getList(ctx.params.type, ctx.params.sortby))
    .get('/categories/ads/:type', async ctx => ctx.body = getAds(ctx.params.type));
};
