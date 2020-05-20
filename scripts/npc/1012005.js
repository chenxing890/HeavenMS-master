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
	NPC Name: 		Cloy
	Map(s): 		Victoria Road : Henesys Park (100000200)
	Description: 		Pet Master
 */
var status = -2;
var sel;

function start() {
    status = -2
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && type > 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
            
        if(status == -1) {
            cm.sendNext("嗯...您有没有机会抚养我的一个孩子？ 我完善了一个使用生命之水将生命注入娃娃的咒语。 人们称其为＃b宠物＃k。 如果您有一个，请随时向我提问。");
        }
        else if (status == 0)
            cm.sendSimple("您想进一步了解什么？#b \ r \ n＃L0＃向我详细介绍宠物。＃l \ r \ n＃L1＃我如何养宠物？#l \ r \ n＃L2＃养宠物#l \ r \ n＃L3＃小猫的命令是什么？#l \ r \ n＃L4＃棕色狗狗的命令是什么？#l \ r \ n＃L5＃是什么#l \ r \ n＃L6＃Mini Kargo的命令是什么？#l \ r \ n＃L7＃Rudolph和Dasher的命令是什么？#l \ r \ n＃ L8＃黑猪的命令是什么？#l \ r \ n＃L9＃熊猫的命令是什么？#l \ r \ n＃L10＃赫斯基的命令是什么？#l \ r \ n＃L11 #恐龙王子和恐龙公主的命令是什么？#l \ r \ n＃L12＃Monkey的命令是什么？#l \ r \ n＃L13＃Turkey的命令是什么？#l \ r \ n ＃L14＃白虎的命令是什么？#l \ r \ n＃L15＃企鹅的命令是什么？#l \ r \ n＃L16＃金猪的命令是什么？#l \ r \ n ＃L17＃机器人的命令是什么？#l \ r \ n＃L18＃Mini Yeti的命令是什么？#l \ r \ n＃L19＃Jr。Balrog的命令是什么？#l \ r \ n＃L20＃Baby Dragon的命令是什么？#l \ r \ n＃L21＃绿色/红色/蓝色龙的命令是什么？#l \ r \ n＃L22＃黑龙的命令是什么？#l \ r \ n＃L23＃小收割者的命令是什么？#l \ r \ n＃L24＃豪猪的命令是什么？#l \ r \ n＃L25＃雪人的命令是什么？#l \ r \ n＃L26＃臭鼬的命令是什么？ #l \ r \ n＃L27＃请教我有关转移宠物能力点的信息。＃l");
        else if (status == 1) {
            sel = selection;
            if (selection == 0) {
                status = 3;
                cm.sendNext("因此，您想进一步了解宠物。 很久以前，我做了一个洋娃娃，在上面喷洒了生命之水，然后在上面施放咒语以创造出一种神奇的动物。 我知道这听起来让人难以置信，但这是一个变成了现实生活的玩偶。 他们非常了解并关注他人。");
            } else if (selection == 1) {
                status = 6;
                cm.sendNext("根据您发出的命令，宠物会喜欢它，讨厌它并表现出其他形式的反应。 如果您给宠物一个命令并且它能很好地跟从您，那么您的亲密感就会增强。 双击宠物，您可以检查亲密度，水平，饱食度等。");
            } else if (selection == 2) {
                status = 11;
                cm.sendNext("垂死...好吧，从本质上讲，它们本质上并不活跃，所以我不知道垂死是否是正确使用的术语。 它们是洋娃娃，具有我的魔力和生命之水的力量，可以成为活物。 当然，虽然它还活着，但它就像一只活的动物...");
            } else if (selection == 3)
                cm.sendNext("这些是#rBrown Kitty和Black Kitty＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad，否，badgirl，badboy＃k（级别1〜30 ）\ r \ n＃bstupid，ihateyou，dummy＃k（等级1〜30）\ r \ n＃biloveyou＃k（等级1〜30）\ r \ n＃bpoop＃k（等级1〜30）\ r \ n＃btalk，例如，聊天#k（级别10〜30）\ r \ n＃bcutie＃k（级别10〜30）\ r \ n＃bup，站立，抬高#k（级别20〜30）“）");
            else if (selection == 4)
                cm.sendNext("这些是#rBrown Puppy＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad，否，badgirl，badboy＃k（级别1〜30 ）\ r \ n＃bstupid，ihateyou，baddog，dummy＃k（等级1〜30）\ r \ n＃biloveyou＃k（等级1〜30）\ r \ n＃bpee＃k（等级1〜30）\ r \ n＃btalk，例如，聊天#k（级别10〜30）\ r \ n＃bdown＃k（级别10〜30）\ r \ n＃bup，站立，抬高#k（级别20〜30）");
            else if (selection == 5)
                cm.sendNext("这些是#rPink Bunny和White Bunny＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad，否，badgirl，badboy＃k（级别1〜30 ）\ r \ n＃bup，站立，上升#k（1〜30级）\ r \ n＃biloveyou＃k（1〜30级）\ r \ n＃bpoop＃k（1〜30级）\ r \ n＃btalk，例如，聊天#k（级别10到30）\ r \ n＃bhug＃k（级别10到30）\ r \ n＃b睡眠，困倦，傻瓜#k（级别20到30）");
            else if (selection == 6)
                cm.sendNext("这些是#rMini Kargo＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad，否，badgirl，badboy＃k（级别1〜30 ）\ r \ n＃bup，站立，上升#k（1〜30级）\ r \ n＃biloveyou＃k（1〜30级）\ r \ n＃bpee＃k（1〜30级）\ r \ n＃btalk，例如，聊天#k（级别10到30）\ r \ n＃bthelook，魅力#k（级别10到30）\ r \ n＃bdown＃k（级别10到30）\ r \ n＃ bgoodboy，goodgirl＃k（等级20〜30）");
            else if (selection == 7)
                cm.sendNext("这些是#rRudolph和Dasher＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad，否，badgirl，badboy＃k（级别1〜30 ）\ r \ n＃bup，stand＃k（1〜30级）\ r \ n＃bstupid，ihateyou，dummy＃k（1〜30级）\ r \ n＃bmerryxmas，merrychristmas＃k（1〜30级 ）\ r \ n＃biloveyou＃k（等级1〜30）\ r \ n＃bpoop＃k（等级1〜30）\ r \ n＃btalk，例如，聊天#k（等级11〜30）\ r \ n＃bonely，alone＃k（11〜30级）\ r \ n＃bcutie＃k（11〜30级）\ r \ n＃bmush，go＃k（21〜30级）");
            else if (selection == 8)
                cm.sendNext("这些是#rBlack Pig＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad，否，badgirl，badboy＃k（级别1〜30 ）\ r \ n＃bpoop＃k（等级1〜30）\ r \ n＃biloveyou＃k（等级1〜30）\ r \ n＃bhand＃k（等级1〜30）\ r \ n＃bstupid， ihateyou，虚拟#k（1〜30级）\ r \ n＃btalk，聊天，说#k（10〜30级）\ r \ n＃bsmile＃k（10〜30级）\ r \ n＃bthelook， 魅力#k（等级20〜30）");
            else if (selection == 9)
                cm.sendNext("这些是＃rPanda＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bchill，relax＃k（级别1〜30）\ r \ n＃bbad，no，badgirl，badboy＃k（级别1〜30）\ r \ n＃bpoop＃k（级别1〜30）\ r \ n＃biloveyou＃k（级别1〜30）\ r \ n＃ bup，站立，抬高#k（1〜30级）\ r \ n＃btalk，聊天，说#k（10〜30级）\ r \ n＃bletsplay＃k（10〜30级）\ r \ n＃ bmeh，bleh＃k（10〜30级）\ r \ n＃bsleep＃k（20〜30级）");
            else if (selection == 10)
                cm.sendNext("这些是＃rHusky＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad，否，badgirl，badboy＃k（级别1〜30 ）\ r \ n＃bstupid，ihateyou，baddog，dummy＃k（等级1〜30）\ r \ n＃bhand＃k（等级1〜30）\ r \ n＃bpoop＃k（等级1〜30）\ r \ n＃biloveyou＃k（级别1〜30）\ r \ n＃bdown＃k（级别10〜30）\ r \ n＃聊天，聊天和说#k（级别10〜30）\ r \ n＃ bup，站立，抬高#k（20〜30级）");
            else if (selection == 11)
                cm.sendNext("这些是#rDino Boy和Dino Girl＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad，否，坏男孩，坏女孩#k（级别1〜30 ）\ r \ n＃biloveyou＃k（等级1〜30）\ r \ n＃bpoop＃k（等级1〜30）\ r \ n＃bsmile，笑#k（等级1〜30）\ r \ n＃ bstupid，ihateyou，dummy＃k（级别1〜30）\ r \ n＃btalk，聊天，说#k（级别10〜30）\ r \ n＃bcutie＃k（级别10〜30）\ r \ n＃ 睡眠，午睡，困倦#k（20〜30级）");
            else if (selection == 12)
                cm.sendNext("这些是＃rMonkey＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃brest＃k（级别1〜30）\ r \ n＃ bbad，no，badboy，badgirl＃k（级别1〜30）\ r \ n＃bpee＃k（级别1〜30）\ r \ n＃biloveyou＃k（级别1〜30）\ r \ n＃bup， 站立#k（1〜30级）\ r \ n＃聊天，说，说#k（10〜30级）\ r \ n＃bplay＃k（10〜30级）\ r \ n＃bmelong＃k（ 10〜30级）\ r \ n＃睡眠，傻瓜，困#k（20〜30级）");
            else if (selection == 13)
                cm.sendNext("这些是＃rTurkey＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bno，粗鲁的男孩，恶作剧#k（级别1〜30）\ r \ n＃bstupid＃k（级别1〜30）\ r \ n＃biloveyou＃k（级别1〜30）\ r \ n＃bup，stand＃k（级别1〜30）\ r \ n＃btalk， 聊天，吞噬#k（10〜30级）\ r \ n＃再见，goodboy＃k（10〜30级）\ r \ n＃睡着了，小睡，打ze睡（20〜30级）\ r \ n＃ bbirdeye，感恩节，苍蝇，炸鸟，饥饿#k（30级）");
            else if (selection == 14)
                cm.sendNext("这些是#rWhite Tiger＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad，否，坏男孩，坏女孩#k（级别1〜30 ）\ r \ n＃biloveyou＃k（等级1〜30）\ r \ n＃bpoop＃k（等级1〜30）\ r \ n＃brest，chill＃k（等级1〜30）\ r \ n＃ bstupid，ihateyou，dummy＃k（级别1〜30）\ r \ n＃btalk，聊天，说#k（级别10〜30）\ r \ n＃bactsad，sadlook＃k（级别10〜30）\ r \ n＃bwait＃k（20〜30级）");
            else if (selection == 15)
                cm.sendNext("这些是＃rPenguin＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad，否，坏男孩，坏女孩#k（级别1〜30 ）\ r \ n＃bpoop＃k（等级1〜30）\ r \ n＃bup，站立，上升#k（等级1〜30）\ r \ n＃biloveyou＃k（等级1〜30）\ r \ n＃btalk，聊天，说#k（10〜30级）\ r \ n＃bhug，hugme＃k（10〜30级）\ r \ n＃bwing，hand＃k（10〜30级）\ r \ n＃bsleep＃k（20〜30级）\ r \ n＃bkiss，smooch，muah＃k（20〜30级）\ r \ n＃bfly＃k（20〜30级）\ r \ n＃bcute， 可爱#k（20〜30级）");
            else if (selection == 16)
                cm.sendNext("这些是#rGolden Pig＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad，否，坏男孩，坏女孩#k（级别1〜30 ）\ r \ n＃bpoop＃k（等级1〜30）\ r \ n＃biloveyou＃k（等级1〜30）\ r \ n＃聊天，说，说#k（等级11〜30）\ r \ n＃bloveme，hugme＃k（11〜30级）\ r \ n＃bsleep，困倦，被愚蠢的#k（21〜30级）\ r \ n＃bignore /印象深刻/印象深刻#k（21〜30级）\ r \ n＃broll，showmethemoney＃k（级别21〜30）");
            else if (selection == 17)
                cm.sendNext("这些是＃rRobot＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bup，站立，上升#k（级别1〜30）\ r \ n＃bstupid，ihateyou，dummy＃k（等级1〜30）\ r \ n＃bbad，否，badgirl，badboy＃k（等级1〜30）\ r \ n＃battack，charge＃k（等级1 〜30）\ r \ n＃biloveyou＃k（1〜30级）\ r \ n＃bgood，thelook，魅力#k（11〜30级）\ r \ n＃bspeack，说话，聊天，说#k（ 11〜30级）\ r \ n＃b伪装，更改，变换#k（11〜30级）");
            else if (selection == 18)
                cm.sendNext("这些是#rMini Yeti＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad，否，坏男孩，坏女孩#k（级别1〜30 ）\ r \ n＃bpoop＃k（等级1〜30）\ r \ n＃bdance，布吉，shakeit＃k（等级1〜30）\ r \ n＃bcute，可爱，漂亮，可爱#k（等级1 〜30）\ r \ n＃biloveyou，likeyou，mylove＃k（Level 1〜30）\ r \ n＃btalk，chat，say＃k（Level 11〜30）\ r \ n＃bsleep，小睡，困倦， gotobed＃k（11〜30级）");
            else if (selection == 19)
                cm.sendNext("这些是#rJr的命令。 Balrog＃k。 命令旁边提到的级别显示了它响应所需的宠物级别。\ r \ n＃bliedown＃k（级别1〜30）\ r \ n＃bno | bad | badgirl | badboy＃badboy（级别1〜30 ）\ r \ n＃biloveyou | mylove | likeyou＃k（等级1〜30）\ r \ n＃bcute |可爱|漂亮|可爱的#k（等级1〜30）\ r \ n＃bpoop＃k（等级1 〜30）\ r \ n＃bsmirk |弯曲的|笑#k（等级1〜30）\ r \ n＃bmelong＃k（等级11〜30）\ r \ n＃bgood | thelook |魅力#k（等级11 〜30）\ r \ n＃bspeak |说话|聊天| say＃k（11级〜30）\ r \ n＃bsleep | nap | sleepy＃k（11级〜30）\ r \ n＃bgas＃k（ 21〜30级）");
            else if (selection == 20)
                cm.sendNext("这些是#rBaby Dragon＃k的命令。 命令旁边提到的级别显示了它响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bno | bad | badgirl | badboy＃k（级别1〜30 ）\ r \ n＃biloveyou | loveyou＃k（等级1〜30）\ r \ n＃bpoop＃k（等级1〜30）\ r \ n＃bstupid | ihateyou | dummy＃k（等级1〜30）\ r \ n＃bcutie＃k（11〜30级）\ r \ n＃btalk | chat | say＃k（11〜30级）\ r \ n＃bsleep | sleepy | gobedbed＃k（11〜30级）");
            else if (selection == 21)
                cm.sendNext("这些是＃rGreen / Red / Blue Dragon＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别15〜30）\ r \ n＃bno | bad | badgirl | badboy＃bad（级别15〜30 ）\ r \ n＃biloveyou | loveyou＃k（15〜30级）\ r \ n＃bpoop＃k（15〜30级）\ r \ n＃bstupid | ihateyou | dummy＃k（15〜30级）\ r \ n＃btalk | chat | say＃k（15〜30级）\ r \ n＃bsleep |困| gobedbed＃k（15〜30级）\ r \ n＃bchange＃k（21〜30级）");
            else if (selection == 22)
                cm.sendNext("这些是#rBlack Dragon＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别15〜30）\ r \ n＃bno | bad | badgirl | badboy＃bad（级别15〜30 ）\ r \ n＃biloveyou | loveyou＃k（15〜30级）\ r \ n＃bpoop＃k（15〜30级）\ r \ n＃bstupid | ihateyou | dummy＃k（15〜30级）\ r \ n＃btalk | chat | say＃k（15〜30级）\ r \ n＃bsleep |困| gobedbed＃k（15〜30级）\ r \ n＃bcutie，更改#k（21〜30级） ）");
            else if (selection == 23)
                cm.sendNext("这些是#rJr的命令。 收割者#k。 命令旁边提到的级别显示了它响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bno | bad | badgirl | badboy＃k（级别1〜30 ）\ r \ n＃bplaydead，大便#k（等级1〜30）\ r \ n＃btalk |聊天| say＃k（等级1〜30）\ r \ n＃biloveyou，拥抱#k（等级1〜30 ）\ r \ n＃bsmellmyfeet，rockout，boo＃k（等级1〜30）\ r \ n＃btrickortreat＃k（等级1〜30）\ r \ n＃bmonstermash＃k（等级1〜30）");
            else if (selection == 24)
                cm.sendNext("这些是＃rPorcupine＃k的命令。 命令旁边提到的级别显示了它响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bno | bad | badgirl | badboy＃k（级别1〜30 ）\ r \ n＃biloveyou |拥抱|好孩子#k（等级1〜30）\ r \ n＃btalk |聊天| say＃k（等级1〜30）\ r \ n＃坐垫|睡眠|编织|便便＃ k（等级1〜30）\ r \ n＃bcomb |海滩#k（等级10〜30）\ r \ n＃btreeninja＃k（等级20〜30）\ r \ n＃bdart＃k（等级20〜30 ）");
            else if (selection == 25)
                cm.sendNext("这些是＃rSnowman＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bstupid，ihateyou，虚拟对象#k（级别1〜30）\ r \ n＃bloveyou，我的爱人，ilikeyou＃k（1至30级）\ r \ n＃bmerrychristmas＃k（1至30级）\ r \ n＃bcutie，可爱，可爱，漂亮的#k（1至30级） ）\ r \ n＃bcomb，沙滩/坏，不，坏女孩，坏男孩#k（1〜30级）\ r \ n＃btalk，聊天，说/睡觉，困了，傻瓜#k（10〜30级）\ r \ n＃bchang＃k（20〜30级）");
            else if (selection == 26)
                cm.sendNext("这些是＃rSkunk＃k的命令。 命令旁边提到的级别显示了其响应所需的宠物级别。\ r \ n＃bsit＃k（级别1〜30）\ r \ n＃bbad / no / badgirl / badboy＃k（级别1〜30 ）\ r \ n＃brestandrelax，大便#k（1〜30级）\ r \ n＃btalk / chat / say，iloveyou＃k（1〜30级）\ r \ n＃bsnuggle / hug，睡眠，好孩子＃ k（等级1〜30）\ r \ n＃b发胖，失明，口臭#k（等级10〜30）\ r \ n＃bsuitup，带来朋克#k（等级20〜30）");
            else if (selection == 27) {
                status = 14;
                cm.sendNext("为了传送宠物能力点，近距离和等级，需要“宠物AP重设滚动”。 如果您将此游标带到Ellinia的Mar Fairy，她将把宠物的水平和亲密关系转移给另一只。 我特别送给您，因为我可以为您的宠物感受到您的心。 但是，我不能免费提供它。 我可以给你这本书250000美索。 哦，我差点忘了！ 即使您拥有这本书，如果您没有新宠物来转移技能点，那也是没有用的。");
            }
            if(selection > 2 && selection < 27)
                cm.dispose();
        } else if (status == 2) {
            if(sel == 0)
                cm.sendNextPrev("但是生命之水只在世界之树的尽头很少散发出来，所以我不能给他太多的生命……我知道，这很不幸……但是即使它再次变成了洋娃娃，我 可以让生活重新恢复活力，所以在生活中对它有益。");
            else if (sel == 1)
                cm.sendNextPrev("与宠物交谈，注意它，它的亲密度会上升，最终他的整体水平也会上升。 随着亲密关系水平的提高，宠物的整体水平将在不久后上升。 随着整体水平的提高，有一天宠物甚至可能会像一个人一样说话，因此，请尝试将其养大。 当然这样做并非易事...");
            else if (sel == 2)
                cm.sendNextPrev("一段时间后...没错，他们停止了活动。 在魔术的作用消失并且生命之水枯竭之后，他们又变回了娃娃。 但这并不意味着它会永远停止，因为一旦您将生命之水倒了，它就会复活。");
            else if (sel == 27)
                cm.sendYesNo("将扣除250,000 mesos。 你真的要买吗？");
        } else if (status == 3) {
            if (sel == 0)
                cm.sendNextPrev("哦，是的，当您给他们特殊命令时，他们会做出反应。 您可以责骂他们，爱他们...这一切都取决于您如何照顾他们。 他们害怕离开主人，对他们好，向他们展示爱。 他们会很快变得悲伤和孤独...");
            else if (sel == 1){
                cm.sendNextPrev("它可能是一个活的玩偶，但他们也有生命，因此他们也能感受到饥饿。 ＃bFullness＃k显示宠物的饥饿程度。最大值为100，而饥饿程度越低，表示宠物变得饥饿。 过了一会儿，它甚至不会按照您的命令进行进攻，因此请当心。");
                return;
            }else if (sel == 2)
                cm.sendNextPrev("即使有一天再次移动，这是可悲的，看到他们完全停止。 当他们还活着的时候，请对他们好。 也要喂饱它们。 知道后面还有一些活着的东西在听着你，这不是很好吗？");
            else if (sel == 27){
                if (cm.getMeso() < 250000 || !cm.canHold(4160011))
                    cm.sendOk("Please check if your inventory has empty slot or you don't have enough mesos.");
                else {
                    cm.gainMeso(-250000);
                    cm.gainItem(4160011, 1);
                }
                cm.dispose();
            }
        } else if (status == 4){
            if(sel != 1)
                cm.dispose();
            cm.sendNextPrev("哦，是的！ 宠物不能吃正常的人类食物。 相反，我的门徒＃bDoofus＃k在Henesys市场上出售#bPet Food＃k，因此，如果您需要宠物的食物，请找Henesys。 提前购买食物并在宠物真正饿之前喂它是一个好主意。");
        } else if (status == 5)
            cm.sendNextPrev("哦，如果您长时间不喂宠物，它就会自己回家。 您可以将它带出家中并喂养它，但这对宠物的健康并没有真正的好处，所以请尝试定期喂养他，以免它降到这个水平，好吗？ 我认为这可以。");
        else
            cm.dispose();
    }
}
