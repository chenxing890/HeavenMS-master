scripts/quest/2251.js
javax.script.ScriptException: <eval>:8:0 Expected an operand but found var
var status = -1;      // script restored thanks to kvmba
^ in <eval> at line number 8 at column number 0
	at jdk.nashorn.api.scripting.NashornScriptEngine.throwAsScriptException(NashornScriptEngine.java:470)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:537)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:524)
	at jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:402)
	at jdk.nashorn.api.scripting.NashornScriptEngine.eval(NashornScriptEngine.java:150)
	at javax.script.AbstractScriptEngine.eval(AbstractScriptEngine.java:249)
	at scripting.AbstractScriptManager.getScriptEngine(AbstractScriptManager.java:58)
	at scripting.AbstractScriptManager.getScriptEngine(AbstractScriptManager.java:70)
	at scripting.quest.QuestScriptManager.getQuestScriptEngine(QuestScriptManager.java:52)
	at scripting.quest.QuestScriptManager.end(QuestScriptManager.java:131)
	at net.server.channel.handlers.QuestActionHandler.handlePacket(QuestActionHandler.java:121)
	at net.MapleServerHandler.messageReceived(MapleServerHandler.java:197)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$TailFilter.messageReceived(DefaultIoFilterChain.java:997)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.access$1300(DefaultIoFilterChain.java:48)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$EntryImpl$1.messageReceived(DefaultIoFilterChain.java:1114)
	at org.apache.mina.filter.codec.ProtocolCodecFilter$ProtocolDecoderOutputImpl.flush(ProtocolCodecFilter.java:437)
	at org.apache.mina.filter.codec.ProtocolCodecFilter.messageReceived(ProtocolCodecFilter.java:256)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.access$1300(DefaultIoFilterChain.java:48)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$EntryImpl$1.messageReceived(DefaultIoFilterChain.java:1114)
	at org.apache.mina.core.filterchain.IoFilterAdapter.messageReceived(IoFilterAdapter.java:121)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.fireMessageReceived(DefaultIoFilterChain.java:634)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor.read(AbstractPollingIoProcessor.java:539)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor.access$1200(AbstractPollingIoProcessor.java:68)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.process(AbstractPollingIoProcessor.java:1242)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.process(AbstractPollingIoProcessor.java:1231)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.run(AbstractPollingIoProcessor.java:683)
	at org.apache.mina.util.NamePreservingRunnable.run(NamePreservingRunnable.java:64)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Caused by: jdk.nashorn.internal.runtime.ParserException: <eval>:8:0 Expected an operand but found var
var status = -1;      // script restored thanks to kvmba
^
	at jdk.nashorn.internal.parser.AbstractParser.error(AbstractParser.java:294)
	at jdk.nashorn.internal.parser.AbstractParser.error(AbstractParser.java:279)
	at jdk.nashorn.internal.parser.Parser.unaryExpression(Parser.java:3182)
	at jdk.nashorn.internal.parser.Parser.unaryExpression(Parser.java:3114)
	at jdk.nashorn.internal.parser.Parser.expression(Parser.java:3282)
	at jdk.nashorn.internal.parser.Parser.expressionStatement(Parser.java:1150)
	at jdk.nashorn.internal.parser.Parser.statement(Parser.java:967)
	at jdk.nashorn.internal.parser.Parser.sourceElements(Parser.java:773)
	at jdk.nashorn.internal.parser.Parser.program(Parser.java:709)
	at jdk.nashorn.internal.parser.Parser.parse(Parser.java:283)
	at jdk.nashorn.internal.parser.Parser.parse(Parser.java:249)
	at jdk.nashorn.internal.runtime.Context.compile(Context.java:1284)
	at jdk.nashorn.internal.runtime.Context.compileScript(Context.java:1251)
	at jdk.nashorn.internal.runtime.Context.compileScript(Context.java:627)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:535)
	... 31 more

---------------------------------

scripts/quest/2251.js
javax.script.ScriptException: <eval>:8:0 Expected an operand but found var
var status = -1;      // script restored thanks to kvmba
^ in <eval> at line number 8 at column number 0
	at jdk.nashorn.api.scripting.NashornScriptEngine.throwAsScriptException(NashornScriptEngine.java:470)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:537)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:524)
	at jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:402)
	at jdk.nashorn.api.scripting.NashornScriptEngine.eval(NashornScriptEngine.java:150)
	at javax.script.AbstractScriptEngine.eval(AbstractScriptEngine.java:249)
	at scripting.AbstractScriptManager.getScriptEngine(AbstractScriptManager.java:58)
	at scripting.AbstractScriptManager.getScriptEngine(AbstractScriptManager.java:70)
	at scripting.quest.QuestScriptManager.getQuestScriptEngine(QuestScriptManager.java:52)
	at scripting.quest.QuestScriptManager.end(QuestScriptManager.java:131)
	at net.server.channel.handlers.QuestActionHandler.handlePacket(QuestActionHandler.java:121)
	at net.MapleServerHandler.messageReceived(MapleServerHandler.java:197)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$TailFilter.messageReceived(DefaultIoFilterChain.java:997)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.access$1300(DefaultIoFilterChain.java:48)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$EntryImpl$1.messageReceived(DefaultIoFilterChain.java:1114)
	at org.apache.mina.filter.codec.ProtocolCodecFilter$ProtocolDecoderOutputImpl.flush(ProtocolCodecFilter.java:437)
	at org.apache.mina.filter.codec.ProtocolCodecFilter.messageReceived(ProtocolCodecFilter.java:256)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.access$1300(DefaultIoFilterChain.java:48)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$EntryImpl$1.messageReceived(DefaultIoFilterChain.java:1114)
	at org.apache.mina.core.filterchain.IoFilterAdapter.messageReceived(IoFilterAdapter.java:121)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.fireMessageReceived(DefaultIoFilterChain.java:634)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor.read(AbstractPollingIoProcessor.java:539)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor.access$1200(AbstractPollingIoProcessor.java:68)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.process(AbstractPollingIoProcessor.java:1242)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.process(AbstractPollingIoProcessor.java:1231)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.run(AbstractPollingIoProcessor.java:683)
	at org.apache.mina.util.NamePreservingRunnable.run(NamePreservingRunnable.java:64)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Caused by: jdk.nashorn.internal.runtime.ParserException: <eval>:8:0 Expected an operand but found var
var status = -1;      // script restored thanks to kvmba
^
	at jdk.nashorn.internal.parser.AbstractParser.error(AbstractParser.java:294)
	at jdk.nashorn.internal.parser.AbstractParser.error(AbstractParser.java:279)
	at jdk.nashorn.internal.parser.Parser.unaryExpression(Parser.java:3182)
	at jdk.nashorn.internal.parser.Parser.unaryExpression(Parser.java:3114)
	at jdk.nashorn.internal.parser.Parser.expression(Parser.java:3282)
	at jdk.nashorn.internal.parser.Parser.expressionStatement(Parser.java:1150)
	at jdk.nashorn.internal.parser.Parser.statement(Parser.java:967)
	at jdk.nashorn.internal.parser.Parser.sourceElements(Parser.java:773)
	at jdk.nashorn.internal.parser.Parser.program(Parser.java:709)
	at jdk.nashorn.internal.parser.Parser.parse(Parser.java:283)
	at jdk.nashorn.internal.parser.Parser.parse(Parser.java:249)
	at jdk.nashorn.internal.runtime.Context.compile(Context.java:1284)
	at jdk.nashorn.internal.runtime.Context.compileScript(Context.java:1251)
	at jdk.nashorn.internal.runtime.Context.compileScript(Context.java:627)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:535)
	... 31 more

---------------------------------

scripts/quest/2251.js
javax.script.ScriptException: <eval>:8:0 Expected an operand but found var
var status = -1;      // script restored thanks to kvmba
^ in <eval> at line number 8 at column number 0
	at jdk.nashorn.api.scripting.NashornScriptEngine.throwAsScriptException(NashornScriptEngine.java:470)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:537)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:524)
	at jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:402)
	at jdk.nashorn.api.scripting.NashornScriptEngine.eval(NashornScriptEngine.java:150)
	at javax.script.AbstractScriptEngine.eval(AbstractScriptEngine.java:249)
	at scripting.AbstractScriptManager.getScriptEngine(AbstractScriptManager.java:58)
	at scripting.AbstractScriptManager.getScriptEngine(AbstractScriptManager.java:70)
	at scripting.quest.QuestScriptManager.getQuestScriptEngine(QuestScriptManager.java:52)
	at scripting.quest.QuestScriptManager.end(QuestScriptManager.java:131)
	at net.server.channel.handlers.QuestActionHandler.handlePacket(QuestActionHandler.java:121)
	at net.MapleServerHandler.messageReceived(MapleServerHandler.java:197)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$TailFilter.messageReceived(DefaultIoFilterChain.java:997)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.access$1300(DefaultIoFilterChain.java:48)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$EntryImpl$1.messageReceived(DefaultIoFilterChain.java:1114)
	at org.apache.mina.filter.codec.ProtocolCodecFilter$ProtocolDecoderOutputImpl.flush(ProtocolCodecFilter.java:437)
	at org.apache.mina.filter.codec.ProtocolCodecFilter.messageReceived(ProtocolCodecFilter.java:256)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.access$1300(DefaultIoFilterChain.java:48)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$EntryImpl$1.messageReceived(DefaultIoFilterChain.java:1114)
	at org.apache.mina.core.filterchain.IoFilterAdapter.messageReceived(IoFilterAdapter.java:121)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.fireMessageReceived(DefaultIoFilterChain.java:634)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor.read(AbstractPollingIoProcessor.java:539)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor.access$1200(AbstractPollingIoProcessor.java:68)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.process(AbstractPollingIoProcessor.java:1242)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.process(AbstractPollingIoProcessor.java:1231)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.run(AbstractPollingIoProcessor.java:683)
	at org.apache.mina.util.NamePreservingRunnable.run(NamePreservingRunnable.java:64)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Caused by: jdk.nashorn.internal.runtime.ParserException: <eval>:8:0 Expected an operand but found var
var status = -1;      // script restored thanks to kvmba
^
	at jdk.nashorn.internal.parser.AbstractParser.error(AbstractParser.java:294)
	at jdk.nashorn.internal.parser.AbstractParser.error(AbstractParser.java:279)
	at jdk.nashorn.internal.parser.Parser.unaryExpression(Parser.java:3182)
	at jdk.nashorn.internal.parser.Parser.unaryExpression(Parser.java:3114)
	at jdk.nashorn.internal.parser.Parser.expression(Parser.java:3282)
	at jdk.nashorn.internal.parser.Parser.expressionStatement(Parser.java:1150)
	at jdk.nashorn.internal.parser.Parser.statement(Parser.java:967)
	at jdk.nashorn.internal.parser.Parser.sourceElements(Parser.java:773)
	at jdk.nashorn.internal.parser.Parser.program(Parser.java:709)
	at jdk.nashorn.internal.parser.Parser.parse(Parser.java:283)
	at jdk.nashorn.internal.parser.Parser.parse(Parser.java:249)
	at jdk.nashorn.internal.runtime.Context.compile(Context.java:1284)
	at jdk.nashorn.internal.runtime.Context.compileScript(Context.java:1251)
	at jdk.nashorn.internal.runtime.Context.compileScript(Context.java:627)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:535)
	... 31 more

---------------------------------

scripts/quest/2251.js
javax.script.ScriptException: <eval>:8:0 Expected an operand but found var
var status = -1;      // script restored thanks to kvmba
^ in <eval> at line number 8 at column number 0
	at jdk.nashorn.api.scripting.NashornScriptEngine.throwAsScriptException(NashornScriptEngine.java:470)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:537)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:524)
	at jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:402)
	at jdk.nashorn.api.scripting.NashornScriptEngine.eval(NashornScriptEngine.java:150)
	at javax.script.AbstractScriptEngine.eval(AbstractScriptEngine.java:249)
	at scripting.AbstractScriptManager.getScriptEngine(AbstractScriptManager.java:58)
	at scripting.AbstractScriptManager.getScriptEngine(AbstractScriptManager.java:70)
	at scripting.quest.QuestScriptManager.getQuestScriptEngine(QuestScriptManager.java:52)
	at scripting.quest.QuestScriptManager.end(QuestScriptManager.java:131)
	at net.server.channel.handlers.QuestActionHandler.handlePacket(QuestActionHandler.java:121)
	at net.MapleServerHandler.messageReceived(MapleServerHandler.java:197)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$TailFilter.messageReceived(DefaultIoFilterChain.java:997)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.access$1300(DefaultIoFilterChain.java:48)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$EntryImpl$1.messageReceived(DefaultIoFilterChain.java:1114)
	at org.apache.mina.filter.codec.ProtocolCodecFilter$ProtocolDecoderOutputImpl.flush(ProtocolCodecFilter.java:437)
	at org.apache.mina.filter.codec.ProtocolCodecFilter.messageReceived(ProtocolCodecFilter.java:256)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.access$1300(DefaultIoFilterChain.java:48)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$EntryImpl$1.messageReceived(DefaultIoFilterChain.java:1114)
	at org.apache.mina.core.filterchain.IoFilterAdapter.messageReceived(IoFilterAdapter.java:121)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.fireMessageReceived(DefaultIoFilterChain.java:634)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor.read(AbstractPollingIoProcessor.java:539)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor.access$1200(AbstractPollingIoProcessor.java:68)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.process(AbstractPollingIoProcessor.java:1242)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.process(AbstractPollingIoProcessor.java:1231)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.run(AbstractPollingIoProcessor.java:683)
	at org.apache.mina.util.NamePreservingRunnable.run(NamePreservingRunnable.java:64)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Caused by: jdk.nashorn.internal.runtime.ParserException: <eval>:8:0 Expected an operand but found var
var status = -1;      // script restored thanks to kvmba
^
	at jdk.nashorn.internal.parser.AbstractParser.error(AbstractParser.java:294)
	at jdk.nashorn.internal.parser.AbstractParser.error(AbstractParser.java:279)
	at jdk.nashorn.internal.parser.Parser.unaryExpression(Parser.java:3182)
	at jdk.nashorn.internal.parser.Parser.unaryExpression(Parser.java:3114)
	at jdk.nashorn.internal.parser.Parser.expression(Parser.java:3282)
	at jdk.nashorn.internal.parser.Parser.expressionStatement(Parser.java:1150)
	at jdk.nashorn.internal.parser.Parser.statement(Parser.java:967)
	at jdk.nashorn.internal.parser.Parser.sourceElements(Parser.java:773)
	at jdk.nashorn.internal.parser.Parser.program(Parser.java:709)
	at jdk.nashorn.internal.parser.Parser.parse(Parser.java:283)
	at jdk.nashorn.internal.parser.Parser.parse(Parser.java:249)
	at jdk.nashorn.internal.runtime.Context.compile(Context.java:1284)
	at jdk.nashorn.internal.runtime.Context.compileScript(Context.java:1251)
	at jdk.nashorn.internal.runtime.Context.compileScript(Context.java:627)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:535)
	... 31 more

---------------------------------

scripts/quest/2251.js
javax.script.ScriptException: <eval>:8:0 Expected an operand but found var
var status = -1;      // script restored thanks to kvmba
^ in <eval> at line number 8 at column number 0
	at jdk.nashorn.api.scripting.NashornScriptEngine.throwAsScriptException(NashornScriptEngine.java:470)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:537)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:524)
	at jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:402)
	at jdk.nashorn.api.scripting.NashornScriptEngine.eval(NashornScriptEngine.java:150)
	at javax.script.AbstractScriptEngine.eval(AbstractScriptEngine.java:249)
	at scripting.AbstractScriptManager.getScriptEngine(AbstractScriptManager.java:58)
	at scripting.AbstractScriptManager.getScriptEngine(AbstractScriptManager.java:70)
	at scripting.quest.QuestScriptManager.getQuestScriptEngine(QuestScriptManager.java:52)
	at scripting.quest.QuestScriptManager.end(QuestScriptManager.java:131)
	at net.server.channel.handlers.QuestActionHandler.handlePacket(QuestActionHandler.java:121)
	at net.MapleServerHandler.messageReceived(MapleServerHandler.java:197)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$TailFilter.messageReceived(DefaultIoFilterChain.java:997)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.access$1300(DefaultIoFilterChain.java:48)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$EntryImpl$1.messageReceived(DefaultIoFilterChain.java:1114)
	at org.apache.mina.filter.codec.ProtocolCodecFilter$ProtocolDecoderOutputImpl.flush(ProtocolCodecFilter.java:437)
	at org.apache.mina.filter.codec.ProtocolCodecFilter.messageReceived(ProtocolCodecFilter.java:256)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.access$1300(DefaultIoFilterChain.java:48)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain$EntryImpl$1.messageReceived(DefaultIoFilterChain.java:1114)
	at org.apache.mina.core.filterchain.IoFilterAdapter.messageReceived(IoFilterAdapter.java:121)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.callNextMessageReceived(DefaultIoFilterChain.java:641)
	at org.apache.mina.core.filterchain.DefaultIoFilterChain.fireMessageReceived(DefaultIoFilterChain.java:634)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor.read(AbstractPollingIoProcessor.java:539)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor.access$1200(AbstractPollingIoProcessor.java:68)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.process(AbstractPollingIoProcessor.java:1242)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.process(AbstractPollingIoProcessor.java:1231)
	at org.apache.mina.core.polling.AbstractPollingIoProcessor$Processor.run(AbstractPollingIoProcessor.java:683)
	at org.apache.mina.util.NamePreservingRunnable.run(NamePreservingRunnable.java:64)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Caused by: jdk.nashorn.internal.runtime.ParserException: <eval>:8:0 Expected an operand but found var
var status = -1;      // script restored thanks to kvmba
^
	at jdk.nashorn.internal.parser.AbstractParser.error(AbstractParser.java:294)
	at jdk.nashorn.internal.parser.AbstractParser.error(AbstractParser.java:279)
	at jdk.nashorn.internal.parser.Parser.unaryExpression(Parser.java:3182)
	at jdk.nashorn.internal.parser.Parser.unaryExpression(Parser.java:3114)
	at jdk.nashorn.internal.parser.Parser.expression(Parser.java:3282)
	at jdk.nashorn.internal.parser.Parser.expressionStatement(Parser.java:1150)
	at jdk.nashorn.internal.parser.Parser.statement(Parser.java:967)
	at jdk.nashorn.internal.parser.Parser.sourceElements(Parser.java:773)
	at jdk.nashorn.internal.parser.Parser.program(Parser.java:709)
	at jdk.nashorn.internal.parser.Parser.parse(Parser.java:283)
	at jdk.nashorn.internal.parser.Parser.parse(Parser.java:249)
	at jdk.nashorn.internal.runtime.Context.compile(Context.java:1284)
	at jdk.nashorn.internal.runtime.Context.compileScript(Context.java:1251)
	at jdk.nashorn.internal.runtime.Context.compileScript(Context.java:627)
	at jdk.nashorn.api.scripting.NashornScriptEngine.compileImpl(NashornScriptEngine.java:535)
	... 31 more

---------------------------------
