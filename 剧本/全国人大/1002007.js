var status = 0;
var maps = [100000000, 102000000, 101000000, 103000000, 120000000];
var cost = [1000, 1000, 800, 1000, 800];
var selectedMap = -1;
var mesos;

function start() {
	if (cm.hasItem(4032313,1)) {
		cm.sendNext("我看到您有一张优惠券可以去射手村。 一会儿，我马上带你去！");
	} else {
		cm.sendNext("您好，我开的是普通驾驶室。 如果您想安全快速地从一个城镇到另一个城镇，请乘坐我们的出租车。 我们很乐意以实惠的价格将您带到目的地。");
	}
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 1 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 2 && mode == 0) {
            cm.sendNext("在这个城镇也有很多景点。 当您需要去另一个城镇时，请回来找我们。");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            if (cm.hasItem(4032313,1)) {
                cm.gainItem(4032313, -1);
                cm.warp(maps[0], 0);
                cm.dispose();
                return;
            }
            
            var selStr = "";
            if (cm.getJobId() == 0)
                selStr += "我们为初学者提供90％的特别折扣。";
            selStr += "选择目的地，费用会因地而异。＃b";
            for (var i = 0; i < maps.length; i++)
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + (cm.getJobId() == 0 ? cost[i] / 10 : cost[i]) + " mesos)#l";
            cm.sendSimple(selStr);
        } else if (status == 2) {
            cm.sendYesNo("您在这里没有其他事情了，是吗？ 您是否真的要去＃b＃m“ +地图[选择] +” ## k？ 它将花费您#b“ +（cm.getJobId（）== 0？cost [选择] / 10：cost [选择]）+” mesos＃k。");
            selectedMap = selection;
        } else if (status == 3) {
            if (cm.getJobId() == 0) {
            	mesos = cost[selectedMap] / 10;
            } else {
            	mesos = cost[selectedMap];
            }
            
            if (cm.getMeso() < mesos) {
                cm.sendNext("您没有足够的金币。 抱歉，如果没有他们，您将无法坐出租车。");
                cm.dispose();
                return;
            }
            
            cm.gainMeso(-mesos);
            cm.warp(maps[selectedMap], 0);
            cm.dispose();
        }
    }
}
