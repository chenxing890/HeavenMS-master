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
/**
-- Odin JavaScript --------------------------------------------------------------------------------
	VIP Cab - Victoria Road : Lith Harbor (104000000)
-- By ---------------------------------------------------------------------------------------------
	Xterminator
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Xterminator
---------------------------------------------------------------------------------------------------
**/

var status = 0;
var cost = 10000;

function start() {
    cm.sendNext("嗨，您好！ 此出租车仅适用于VIP客户。 我们不仅会像普通出租车一样带您前往其他城镇，我们还提供了值得VIP级别的更好服务。 它有点贵，但是...仅需10,000个messos，我们将带您安全前往\ r \ n＃b蚂蚁隧道＃k。");
}

function action(mode, type, selection) {
    status++;
    if (mode == -1){
        cm.dispose();
        return;
    } else if (mode == 0) {
        cm.sendOk("这个镇也有很多景点。 当您有需要去蚂蚁隧道公园时，找到我们。");
    	cm.dispose();
    	return;
    }
    if (status == 1) {
        cm.sendYesNo(cm.getJobId() == 0 ? "我们为初学者提供90％的特别折扣。 蚂蚁隧道位于地牢的深处，地牢位于维多利亚岛的中心，那里是24小时流动商店所在的地方。 您想以＃b1,000 mesos＃k的价格去那儿吗？“：”常规费用适用于所有非初学者。 蚂蚁隧道位于地牢内部的深处，地牢位于维多利亚岛的中心，那里是24小时流动商店所在的地方。 您想花＃b10,000 mesos＃k去那里吗？");
        cost /= ((cm.getJobId() == 0) ? 10 : 1);
    } else if (status == 2) {
        if (cm.getMeso() < cost)
            cm.sendNext("您似乎没有足够的金币。 抱歉，没有它您将无法使用。")
        else {
            cm.gainMeso(-cost);
            cm.warp(105070001);
        }
        cm.dispose();
    }
}
