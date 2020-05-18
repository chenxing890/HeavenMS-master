/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* Author: Xterminator
	NPC Name: 		Mr. Goldstein
	Map(s): 		Victoria Road : Lith Harbour (104000000)
	Description:		Extends Buddy List
*/
var status = 0;
	
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status == 0 && mode == 0) {
		cm.sendNext("我知道...您的朋友不如我想的那么多。 哈哈哈，开玩笑！ 无论如何，如果您想改变主意，请随时回来，我们将洽谈业务。 如果您结交了很多朋友，那么您就会知道...呵呵...");
		cm.dispose();
		return;
	} else if (status >= 1 && mode == 0) {
		cm.sendNext("我知道了...我认为您没有像我想的那样有那么多朋友。 如果不是，那分钟您就没有240,000 mesos了吗？ 无论如何，如果您改变主意，请回来，我们会谈生意。 那当然是，一旦您获得一些经济上的救济。 .. 呵呵 ...");
		cm.dispose();
		return;
	}	
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendYesNo("我希望我能赚到昨天一样多...嗯，你好！ 您是否不想扩展好友列表？ 您看起来像一个有很多朋友的人...嗯，您觉得呢？ 有了一些钱，我就能为您实现。 不过请记住，它一次仅适用于一个字符，因此不会影响帐户中的其他任何字符。 您想扩展好友列表吗？");
	} else if (status == 1) {
		cm.sendYesNo("好，打个招呼！ 其实并不算贵。 ＃b240,000 mesos，我将在您的好友列表中再添加5个广告位#k。 不，我不会单独出售它们。 一旦购买，它将永久存在于您的好友列表中。 因此，如果您是那里需要更多空间的人之一，那么不妨这样做。 你怎么看？ 您会为此花费240,000 mesos吗？");
	} else if (status == 2) {
		var capacity = cm.getPlayer().getBuddylist().getCapacity();
		if (capacity >= 50 || cm.getMeso() < 240000){
			cm.sendNext("嘿...你确定你有＃b240,000 mesos＃k吗？ 如果是这样，请检查并查看您的好友列表是否已扩展到最大。 即使您付款，在好友列表上最多可以看到＃b50＃k。");
            cm.dispose();
		} else {
			var newcapacity = capacity + 5;
			cm.gainMeso(-240000);
			cm.getPlayer().setBuddyCapacity(newcapacity)		
			cm.sendOk("好的！ 您的好友列表现在将有5个额外的位置。 自己检查并查看。 而且，如果您在好友列表上仍然需要更多空间，您就会知道该找谁。 当然，这不是免费的...好吧，这么久...");
			cm.dispose();
			}
		}
	}
}
