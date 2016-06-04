

import _debug from 'debug';

const debug = _debug('app:server:api:/detail');

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
        name: 'Wunderlist - To-do and Task list',
        desc: `
        奇妙清单帮助数百万人记录点子或想法、想要完成的任务和想去的地方。无论是计划旅程，与您的好友分享购物清单或者是同事团队之间的工作项目，奇妙清单让您更容易与所有人协作。您还可以在电话，平板和电脑间无缝同步您的清单，让您能够随时随地从几乎任何设备掌握任务，与您生活同步。

        「奇妙清单，如约而至！」- 极客公园

        The New York Times、Lifehacker、TechCrunch、CNET、The Guardian、Wired和Vanity Fair等多家媒体对奇妙清单进行了报导。
        `,
        url: '/',
        icon: '/images/wunderlist.png',
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

debug('Start listenning');

export default (api) => {

api
    .get('/detail/list/:type?', async ctx => ctx.body = await getList(ctx.params.type, ctx.params.sortby));
};
