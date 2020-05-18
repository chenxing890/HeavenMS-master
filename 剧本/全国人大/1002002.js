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
	NPC Name: 		Pison
	Map(s): 		Victoria Road : Lith Harbor (104000000)
	Description: 		Florina Beach Tour Guide
 */
var status = 0;

function start() {
    cm.sendSimple("您是否听说过位于利斯港附近，享有#b黄金海岸#k壮观海景的海滩？ 我现在可以带您去＃b1500 金币＃k，或者如果您有#bVIP到黄金海岸＃k的票，在这种情况下，您将免费在那里。\ r \ n \ r \ n ＃L0 ## b我将支付1500 金币。＃l \ r \ n＃L1＃我有一张前往黄金海岸的VIP门票。＃l \ r \ n＃L2＃什么是到黄金海岸的VIP门票#k？ #l");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1)
        if((mode == 0 && type == 1) || mode == -1 || (mode == 0 && status == 1)){
            if(type == 1)
                cm.sendNext("您必须要处理一些事务。 您必须在旅途和狩猎中感到疲倦。 去休息一下，如果您想改变主意，那就跟我谈谈。");
            cm.dispose();
            return;
        } else
            status -= 2;
    if (selection == 0)
        status++;
    if(status == 1){
        if(selection == 1)
            cm.sendYesNo("那么，您有#bVIP到黄金海岸＃k的票吗？ 您可以随时随地前往黄金海岸。 好的，但是请注意，您可能也在那里遇到了一些怪物。 好的，您现在想去黄金海岸吗？");
        else if (selection == 2)
            cm.sendNext("您必须对#bVIP黄金海岸#k票感到好奇。 哈哈，这是很容易理解的。 黄金海岸的VIP票是一项只要您拥有的物品，您就可以免费前往黄金海岸。 这种稀有物品甚至连我们都必须买下来，但是不幸的是，几个星期前，在我宝贵的暑假期间，我迷失了我。");
    } else if (status == 2){
        if(type != 1 && selection != 0) {
            cm.sendNextPrev("我没有它就回来了，没有它简直太可怕了。 希望有人把它捡起来放在安全的地方。 无论如何，这是我的故事，谁知道，您也许可以捡起它并加以利用。 如果你有任何问题随时问。.");
			cm.dispose();
		} else{
            if (cm.getMeso() < 1500 && selection == 0)
                cm.sendNext("我认为您缺少金币。 您知道有很多方法来筹集资金，例如……卖掉盔甲，打败怪物……执行任务……您知道我在说什么。");
            else if(!cm.haveItem(4031134) && selection != 0){
                cm.sendNext("嗯，那么您到黄金 \ r \ n海岸＃k的#bVIP票到底在哪里？ 您确定有一个吗？ 请仔细检查。");
            }else{
                if(selection == 0)
                    cm.gainMeso(-1500);
                cm.getPlayer().saveLocation("FLORINA");
                cm.warp(110000000, "st00");
            }
            cm.dispose();
        }
    }
}
