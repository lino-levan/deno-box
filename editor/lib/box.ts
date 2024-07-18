import { DenoBox } from "../../src/mod.ts";

export const box = new DenoBox();

box.fs.writeFile("hello.ts", new TextEncoder().encode("console.log('Hello world!');"));
box.fs.writeFile("hello2.ts", new TextEncoder().encode("console.log('Hello world 2!');"));
box.fs.writeFile("real.ts", new TextEncoder().encode(`const logs = (await Deno.readTextFile("log.txt")).split('\\n');

let relevant = [];

for(const log of logs) {
  if(!log.includes("net.minecraft.server.MinecraftServer/") || log.includes("<") || log.includes("challenge") || log.includes("lie") || log.includes("Can't keep up") || log.includes("goal") || log.includes("left") || log.includes("joined") || log.includes("advancement")) continue;
  relevant.push(log.slice(87));
}

relevant.sort();

for(const r of relevant) {
console.log(r);
}`));
box.fs.writeFile("log.txt", new TextEncoder().encode(`[15Jul2024 07:26:45.255] [User Authenticator #25/INFO] [net.minecraft.server.network.ServerLoginPacketListenerImpl/]: UUID of player ioBdaSylemertxE is 7aed0a75-9349-4362-9283-bcfdd3b0e80a
[15Jul2024 07:26:59.587] [Server thread/INFO] [net.minecraft.server.players.PlayerList/]: ioBdaSylemertxE[/73.231.15.211:55415] logged in with entity id 695826 at (-233.5, 44.0, 187.5)
[15Jul2024 07:26:59.589] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending ToolHandleTypeManager to ioBdaSylemertxE
[15Jul2024 07:26:59.589] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending SnowcapOvenFreezingManager to ioBdaSylemertxE
[15Jul2024 07:26:59.589] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending HorizoniteForgeFuelManager to ioBdaSylemertxE
[15Jul2024 07:26:59.589] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending AlchemyRecipeManager to ioBdaSylemertxE
[15Jul2024 07:26:59.590] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalEntryManager to ioBdaSylemertxE
[15Jul2024 07:26:59.591] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalSectionManager to ioBdaSylemertxE
[15Jul2024 07:26:59.591] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalRequirementManager to ioBdaSylemertxE
[15Jul2024 07:26:59.610] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE joined the game
[15Jul2024 07:26:59.630] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 7aed0a75-9349-4362-9283-bcfdd3b0e80a
[15Jul2024 07:26:59.634] [Server thread/INFO] [Jade/]: Syncing config to ioBdaSylemertxE (7aed0a75-9349-4362-9283-bcfdd3b0e80a)
[15Jul2024 07:26:59.908] [Server thread/INFO] [ping-wheel/]: [Ping-Wheel] Channel update: ioBdaSylemertxE -> Global
[15Jul2024 07:26:59.908] [Server thread/INFO] [org.betterx.worlds.together.util.Logger/]: [bclib] Auto-Sync was disabled on the server.
[15Jul2024 07:29:55.123] [User Authenticator #26/INFO] [net.minecraft.server.network.ServerLoginPacketListenerImpl/]: UUID of player ioBdaSylemertxE is 7aed0a75-9349-4362-9283-bcfdd3b0e80a
[15Jul2024 07:30:14.771] [Server thread/INFO] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: ioBdaSylemertxE lost connection: Disconnected
[15Jul2024 07:30:14.771] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE left the game
[15Jul2024 07:30:14.771] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 7aed0a75-9349-4362-9283-bcfdd3b0e80a
[15Jul2024 07:30:14.836] [Server thread/INFO] [net.minecraft.server.players.PlayerList/]: ioBdaSylemertxE[/73.231.15.211:55473] logged in with entity id 696709 at (-233.5, 44.0, 187.5)
[15Jul2024 07:30:14.838] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending ToolHandleTypeManager to ioBdaSylemertxE
[15Jul2024 07:30:14.839] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending SnowcapOvenFreezingManager to ioBdaSylemertxE
[15Jul2024 07:30:14.839] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending HorizoniteForgeFuelManager to ioBdaSylemertxE
[15Jul2024 07:30:14.839] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending AlchemyRecipeManager to ioBdaSylemertxE
[15Jul2024 07:30:14.840] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalEntryManager to ioBdaSylemertxE
[15Jul2024 07:30:14.841] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalSectionManager to ioBdaSylemertxE
[15Jul2024 07:30:14.841] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalRequirementManager to ioBdaSylemertxE
[15Jul2024 07:30:14.861] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE joined the game
[15Jul2024 07:30:14.886] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 7aed0a75-9349-4362-9283-bcfdd3b0e80a
[15Jul2024 07:30:14.889] [Server thread/INFO] [Jade/]: Syncing config to ioBdaSylemertxE (7aed0a75-9349-4362-9283-bcfdd3b0e80a)
[15Jul2024 07:30:16.428] [Server thread/INFO] [ping-wheel/]: [Ping-Wheel] Channel update: ioBdaSylemertxE -> Global
[15Jul2024 07:30:16.568] [Server thread/INFO] [org.betterx.worlds.together.util.Logger/]: [bclib] Auto-Sync was disabled on the server.
[15Jul2024 08:15:01.278] [Modding Legacy/blue_skies/Supporters thread/INFO] [ModdingLegacy/blue_skies/Supporter/]: Attempting to load the Modding Legacy supporters list from https://moddinglegacy.com/supporters-changelogs/supporters.txt
[15Jul2024 08:15:01.481] [Modding Legacy/blue_skies/Supporters thread/INFO] [ModdingLegacy/blue_skies/Supporter/]: Successfully loaded the Modding Legacy supporters list.
[15Jul2024 08:36:24.225] [Server thread/INFO] [net.minecraft.world.entity.npc.Villager/]: Villager Villager['Kemberly'/704258, l='ServerLevel[world]', x=-269.79, y=62.50, z=164.66] died, message: 'Kemberly was slain by ioBdaSylemertxE'
[15Jul2024 08:36:24.226] [Server thread/INFO] [net.minecraft.world.entity.LivingEntity/]: Named entity Villager['Kemberly'/704258, l='ServerLevel[world]', x=-269.79, y=62.50, z=164.66] died: Kemberly was slain by ioBdaSylemertxE
[15Jul2024 08:57:35.569] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2396ms or 47 ticks behind
[15Jul2024 09:03:55.576] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2152ms or 43 ticks behind
[15Jul2024 10:10:40.367] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2093ms or 41 ticks behind
[15Jul2024 10:16:05.811] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: ioBdaSylemertxE moved too quickly! -359.21509917595154,-34.5,-45.16950464626868
[15Jul2024 10:25:10.175] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Light Up The World!]
[15Jul2024 10:34:17.471] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: ioBdaSylemertxE moved too quickly! -1041.3161494238825,-42.5,-576.8546004777373
[15Jul2024 10:41:33.945] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Forever Dawn?]
[15Jul2024 10:42:21.032] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [A New Dawn]
[15Jul2024 10:54:07.099] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [A Swift Upgrade]
[15Jul2024 10:57:56.619] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Quite The Boost]
[15Jul2024 11:04:21.222] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Tough to Beat]
[15Jul2024 11:15:37.694] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Warm Inside]
[15Jul2024 11:32:23.086] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Purple Power!]
[15Jul2024 11:32:37.349] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Well Seasoned]
[15Jul2024 11:38:27.623] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Bane of my Existence]
[15Jul2024 11:53:32.415] [Server thread/INFO] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: ioBdaSylemertxE lost connection: Disconnected
[15Jul2024 11:53:32.415] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE left the game
[15Jul2024 11:53:32.416] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 7aed0a75-9349-4362-9283-bcfdd3b0e80a
[15Jul2024 13:21:21.037] [User Authenticator #27/INFO] [net.minecraft.server.network.ServerLoginPacketListenerImpl/]: UUID of player LocoDestroyo is 83bc8166-9ac9-43f4-9570-1f9ed0214a8a
[15Jul2024 13:21:23.918] [Server thread/INFO] [net.minecraft.server.players.PlayerList/]: LocoDestroyo[/98.47.210.235:53766] logged in with entity id 1006570 at (-217.4459093274636, 70.0, 301.2727644390171)
[15Jul2024 13:21:23.920] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending ToolHandleTypeManager to LocoDestroyo
[15Jul2024 13:21:23.920] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending SnowcapOvenFreezingManager to LocoDestroyo
[15Jul2024 13:21:23.921] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending HorizoniteForgeFuelManager to LocoDestroyo
[15Jul2024 13:21:23.921] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending AlchemyRecipeManager to LocoDestroyo
[15Jul2024 13:21:23.921] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalEntryManager to LocoDestroyo
[15Jul2024 13:21:23.922] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalSectionManager to LocoDestroyo
[15Jul2024 13:21:23.922] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalRequirementManager to LocoDestroyo
[15Jul2024 13:21:23.942] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo joined the game
[15Jul2024 13:21:23.960] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 83bc8166-9ac9-43f4-9570-1f9ed0214a8a
[15Jul2024 13:21:23.964] [Server thread/INFO] [Jade/]: Syncing config to LocoDestroyo (83bc8166-9ac9-43f4-9570-1f9ed0214a8a)
[15Jul2024 13:21:28.422] [Server thread/INFO] [ping-wheel/]: [Ping-Wheel] Channel update: LocoDestroyo -> Global
[15Jul2024 13:21:28.449] [Server thread/INFO] [org.betterx.worlds.together.util.Logger/]: [bclib] Auto-Sync was disabled on the server.
[15Jul2024 13:26:50.116] [Server thread/INFO] [com.lothrazar.storagenetwork.StorageNetworkMod/]: Chunk not loadedBlockPos{x=-215, y=68, z=303}
[15Jul2024 13:27:27.255] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: LocoDestroyo moved too quickly! 1130.627104514262,1.5,-5748.416591442728
[15Jul2024 13:27:27.272] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: LocoDestroyo moved too quickly! 1130.627104514262,1.5,-5748.416591442728
[15Jul2024 13:30:31.611] [pool-9-thread-2/INFO] [Supplementaries/]: Searching for closest structure among [ResourceKey[minecraft:worldgen/structure / towns_and_towers:exclusives/village_tudor], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_snowy_taiga], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_giant_taiga], ResourceKey[minecraft:worldgen/structure / minecraft:village_plains], ResourceKey[minecraft:worldgen/structure / blue_skies:village_slushlands], ResourceKey[minecraft:worldgen/structure / blue_skies:village_sunset_maple_forest], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_oak], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_grove]] from pos BlockPos{x=-821, y=67, z=6021}
[15Jul2024 13:30:34.639] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2865ms or 57 ticks behind
[15Jul2024 13:30:34.667] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 9.409294248698302,0.0,4.410143485833032
[15Jul2024 13:30:34.668] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 9.769547021434846,0.0,4.58380125551048
[15Jul2024 13:30:34.668] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 10.129751707982336,0.0,4.757572382529361
[15Jul2024 13:30:34.668] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 10.489913116960793,0.0,4.931445531151439
[15Jul2024 13:30:34.668] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 10.850033899747473,0.0,5.105413948834212
[15Jul2024 13:30:34.668] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 11.210118118962555,0.0,5.27946810866797
[15Jul2024 13:30:34.668] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 11.570169430964029,0.0,5.453599436436889
[15Jul2024 13:30:34.668] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 11.930189450093508,0.0,5.6278036649637215
[15Jul2024 13:30:34.669] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 12.29018130563884,0.0,5.802073504170949
[15Jul2024 13:30:34.669] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 12.650147813959165,0.0,5.976402392988348
[15Jul2024 13:30:34.669] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 13.010091509777567,0.0,6.1507844264542655
[15Jul2024 13:30:34.669] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 13.370013001689472,0.0,6.325217739721666
[15Jul2024 13:30:34.669] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 13.729914510086019,0.0,6.499697204808399
[15Jul2024 13:30:34.669] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 14.089798033319198,0.0,6.674218206531805
[15Jul2024 13:30:34.669] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 14.449665369905802,0.0,6.848776591227761
[15Jul2024 13:30:34.669] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 14.809518138510953,0.0,7.023368620597466
[15Jul2024 13:30:34.670] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 15.169357795933024,0.0,7.197990930172637
[15Jul2024 13:30:34.670] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 15.52918565329071,0.0,7.372640491932543
[15Jul2024 13:30:34.670] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 15.889002890590632,0.0,7.5473145806572575
[15Jul2024 13:30:34.670] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 16.248808889733027,0.0,7.722014191406743
[15Jul2024 13:30:34.670] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 16.608604774533887,0.0,7.896736771977885
[15Jul2024 13:30:34.670] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 16.96839155642749,0.0,8.071480025387245
[15Jul2024 13:30:34.670] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 17.328170145704917,0.0,8.246241884350638
[15Jul2024 13:30:34.670] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 17.687941361627963,0.0,8.421020488312934
[15Jul2024 13:30:34.671] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 18.047705941532172,0.0,8.595814162773422
[15Jul2024 13:30:34.671] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 18.40746454901955,0.0,8.770621400682103
[15Jul2024 13:30:34.671] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 18.76721778133208,0.0,8.945440845693156
[15Jul2024 13:30:34.671] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 19.126966175987263,0.0,9.120271277096435
[15Jul2024 13:30:34.671] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 19.48671021675102,0.0,9.295111596253264
[15Jul2024 13:30:34.671] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 19.84645033901245,0.0,9.469960814387377
[15Jul2024 13:30:34.671] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 20.206186934621996,0.0,9.644818041600047
[15Jul2024 13:30:34.671] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 20.565920356244987,0.0,9.81968247698478
[15Jul2024 13:30:34.672] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 20.925650921280067,0.0,9.994553399723372
[15Jul2024 13:30:34.708] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of LocoDestroyo) moved too quickly! 12.236389005879573,0.0,5.932822325230518
[15Jul2024 13:33:56.091] [pool-9-thread-3/INFO] [Supplementaries/]: Searching for closest structure among [ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_badlands], ResourceKey[minecraft:worldgen/structure / blue_skies:village_sunset_maple_forest], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_swamp], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_sparse_jungle], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_mushroom], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_birch_forest], ResourceKey[minecraft:worldgen/structure / blue_skies:village_slushlands], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_dark_forest]] from pos BlockPos{x=43, y=73, z=6421}
[15Jul2024 13:35:19.652] [pool-9-thread-4/INFO] [Supplementaries/]: Searching for closest structure among [ResourceKey[minecraft:worldgen/structure / towns_and_towers:exclusives/village_swedish], ResourceKey[minecraft:worldgen/structure / minecraft:village_savanna], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_beach], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_swamp], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_dark_forest], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_oak], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_snowy_taiga], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_bamboo]] from pos BlockPos{x=43, y=75, z=5893}
[15Jul2024 13:35:34.565] [Server thread/WARN] [net.minecraft.world.level.chunk.LevelChunk/]: Tried to load a DUMMY block entity @ BlockPos{x=-56, y=-40, z=5775} but found not block entity block Block{minecraft:cave_air} at location
[15Jul2024 13:35:34.565] [Server thread/WARN] [net.minecraft.world.level.chunk.LevelChunk/]: Tried to load a block entity for block Block{minecraft:cave_air} but failed at location BlockPos{x=-56, y=-40, z=5775}
[15Jul2024 13:36:46.305] [pool-9-thread-5/INFO] [Supplementaries/]: Searching for closest structure among [ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_giant_taiga], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_oak], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_meadow], ResourceKey[minecraft:worldgen/structure / towns_and_towers:exclusives/village_rustic], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_flower_forest], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_grove], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_ocean], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_crimson]] from pos BlockPos{x=181, y=72, z=5499}
[15Jul2024 13:36:48.551] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2077ms or 41 ticks behind
[15Jul2024 13:45:28.319] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo has made the advancement [Bewitched]
[15Jul2024 13:52:15.520] [pool-9-thread-6/INFO] [Supplementaries/]: Searching for closest structure among [ResourceKey[minecraft:worldgen/structure / blue_skies:village_sunset_maple_forest], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_giant_taiga], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_birch_forest], ResourceKey[minecraft:worldgen/structure / towns_and_towers:exclusives/village_swedish], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_wooded_badlands], ResourceKey[minecraft:worldgen/structure / repurposed_structures:village_crimson], ResourceKey[minecraft:worldgen/structure / towns_and_towers:village_meadow], ResourceKey[minecraft:worldgen/structure / minecraft:village_snowy]] from pos BlockPos{x=-757, y=75, z=3227}
[15Jul2024 13:53:22.319] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-324, y=67, z=4613} BlockPos{x=-735, y=72, z=3327}
[15Jul2024 13:55:02.561] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: LocoDestroyo moved too quickly! 475.0531606950551,-5.5,-2886.7299186972896
[15Jul2024 14:08:52.305] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo has made the advancement [Forever Dawn?]
[15Jul2024 14:15:24.682] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo has made the advancement [Baby Food]
[15Jul2024 14:18:59.732] [Server thread/INFO] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: LocoDestroyo lost connection: Disconnected
[15Jul2024 14:18:59.732] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo left the game
[15Jul2024 14:18:59.733] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 83bc8166-9ac9-43f4-9570-1f9ed0214a8a
[15Jul2024 14:58:06.772] [User Authenticator #28/INFO] [net.minecraft.server.network.ServerLoginPacketListenerImpl/]: UUID of player ioBdaSylemertxE is 7aed0a75-9349-4362-9283-bcfdd3b0e80a
[15Jul2024 14:58:09.966] [Server thread/INFO] [net.minecraft.server.players.PlayerList/]: ioBdaSylemertxE[/73.231.15.211:61410] logged in with entity id 1058347 at (-1389.7193780282553, 68.0, 1927.1466813271522)
[15Jul2024 14:58:09.968] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending ToolHandleTypeManager to ioBdaSylemertxE
[15Jul2024 14:58:09.968] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending SnowcapOvenFreezingManager to ioBdaSylemertxE
[15Jul2024 14:58:09.969] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending HorizoniteForgeFuelManager to ioBdaSylemertxE
[15Jul2024 14:58:09.969] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending AlchemyRecipeManager to ioBdaSylemertxE
[15Jul2024 14:58:09.969] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalEntryManager to ioBdaSylemertxE
[15Jul2024 14:58:09.970] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalSectionManager to ioBdaSylemertxE
[15Jul2024 14:58:09.970] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalRequirementManager to ioBdaSylemertxE
[15Jul2024 14:58:09.989] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE joined the game
[15Jul2024 14:58:09.995] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 7aed0a75-9349-4362-9283-bcfdd3b0e80a
[15Jul2024 14:58:09.999] [Server thread/INFO] [Jade/]: Syncing config to ioBdaSylemertxE (7aed0a75-9349-4362-9283-bcfdd3b0e80a)
[15Jul2024 14:58:21.939] [Server thread/INFO] [ping-wheel/]: [Ping-Wheel] Channel update: ioBdaSylemertxE -> Global
[15Jul2024 14:58:21.949] [Server thread/INFO] [org.betterx.worlds.together.util.Logger/]: [bclib] Auto-Sync was disabled on the server.
[15Jul2024 15:19:00.731] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Preheated]
[15Jul2024 15:32:17.515] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Crogre (vehicle of ioBdaSylemertxE) moved wrongly! 0.8119177554885937
[15Jul2024 15:44:06.513] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: ioBdaSylemertxE moved too quickly! 1308.3716066984894,-0.5,1198.6807471136235
[15Jul2024 15:49:55.930] [Server thread/INFO] [net.minecraft.world.entity.LivingEntity/]: Named entity Guard['Elvin'/1095509, l='ServerLevel[world]', x=-1135.21, y=67.52, z=90.70] died: Elvin was slain by Vindicator
[15Jul2024 15:50:00.890] [Server thread/INFO] [net.minecraft.world.entity.LivingEntity/]: Named entity Guard['Norman'/1095514, l='ServerLevel[world]', x=-1119.96, y=64.00, z=89.73] died: Norman was slain by Vindicator
[15Jul2024 15:50:06.266] [Server thread/INFO] [net.minecraft.world.entity.LivingEntity/]: Named entity Guard['Damien'/1095515, l='ServerLevel[world]', x=-1117.47, y=65.15, z=96.66] died: Damien was shot by Provoker
[15Jul2024 16:01:52.096] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: ioBdaSylemertxE moved too quickly! 42.467092918153185,-31.5,-310.6282587498178
[15Jul2024 16:02:52.494] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:06:32.935] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:06:33.074] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:06:33.136] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:06:33.280] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:32.672] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:32.731] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:32.875] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:32.930] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:33.074] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:33.132] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:33.279] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:33.330] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:33.473] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:33.531] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:33.674] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:33.730] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:33.867] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:33.929] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:34.073] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:34.129] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:34.266] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:34.331] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:07:34.470] [Server thread/ERROR] [net.minecraft.Util/]: Invalid entity rotation: NaN, discarding.
[15Jul2024 16:11:10.053] [Server thread/WARN] [net.minecraft.world.entity.EntityType/]: Exception loading entity:
net.minecraft.ReportedException: Loading entity NBT
    at net.minecraft.world.entity.Entity.m_20258_(Entity.java:1765) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.world.entity.EntityType.m_185988_(EntityType.java:532) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.Util.m_137521_(Util.java:419) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.world.entity.EntityType.m_20642_(EntityType.java:529) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.world.entity.EntityType.m_20669_(EntityType.java:607) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.world.entity.EntityType.m_20645_(EntityType.java:563) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.world.entity.EntityType$1.m_147056_(EntityType.java:584) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at java.util.Spliterators$IteratorSpliterator.tryAdvance(Spliterators.java:1856) ~[?:?]
    at net.minecraft.world.entity.EntityType$1.tryAdvance(EntityType.java:583) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at java.util.Spliterator.forEachRemaining(Spliterator.java:332) ~[?:?]
    at java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:509) ~[?:?]
    at java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499) ~[?:?]
    at java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:921) ~[?:?]
    at java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234) ~[?:?]
    at java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:682) ~[?:?]
    at net.minecraft.world.level.chunk.storage.EntityStorage.m_223456_(EntityStorage.java:62) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at java.util.concurrent.CompletableFuture$UniApply.tryFire(CompletableFuture.java:646) ~[?:?]
    at java.util.concurrent.CompletableFuture$Completion.run(CompletableFuture.java:482) ~[?:?]
    at net.minecraft.util.thread.ProcessorMailbox.m_18759_(ProcessorMailbox.java:91) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.util.thread.ProcessorMailbox.m_18747_(ProcessorMailbox.java:146) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.util.thread.ProcessorMailbox.run(ProcessorMailbox.java:102) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.TickTask.run(TickTask.java:18) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.util.thread.BlockableEventLoop.m_6367_(BlockableEventLoop.java:156) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.util.thread.ReentrantBlockableEventLoop.m_6367_(ReentrantBlockableEventLoop.java:23) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_6367_(MinecraftServer.java:770) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_6367_(MinecraftServer.java:161) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.util.thread.BlockableEventLoop.m_7245_(BlockableEventLoop.java:130) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_129961_(MinecraftServer.java:753) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_7245_(MinecraftServer.java:747) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.util.thread.BlockableEventLoop.m_18699_(BlockableEventLoop.java:115) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_130012_(MinecraftServer.java:732) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_130011_(MinecraftServer.java:665) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_206580_(MinecraftServer.java:251) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at java.lang.Thread.run(Thread.java:833) ~[?:?]
Caused by: java.lang.IllegalStateException: Entity has invalid position
    at net.minecraft.world.entity.Entity.m_20258_(Entity.java:1759) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    ... 33 more
[15Jul2024 16:11:53.563] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1265, y=70, z=-1649} BlockPos{x=-1266, y=70, z=-1650}
[15Jul2024 16:11:53.668] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1265, y=70, z=-1649} BlockPos{x=-1266, y=70, z=-1650}
[15Jul2024 16:11:53.669] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1265, y=70, z=-1649} BlockPos{x=-1266, y=70, z=-1650}
[15Jul2024 16:11:53.719] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1265, y=70, z=-1649} BlockPos{x=-1266, y=70, z=-1650}
[15Jul2024 16:11:53.769] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1265, y=70, z=-1649} BlockPos{x=-1266, y=70, z=-1650}
[15Jul2024 16:11:53.864] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1265, y=70, z=-1649} BlockPos{x=-1266, y=70, z=-1650}
[15Jul2024 16:11:53.892] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1265, y=70, z=-1649} BlockPos{x=-1266, y=70, z=-1650}
[15Jul2024 16:11:53.902] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1265, y=70, z=-1649} BlockPos{x=-1266, y=70, z=-1650}
[15Jul2024 16:11:53.958] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1265, y=70, z=-1649} BlockPos{x=-1266, y=70, z=-1650}
[15Jul2024 16:11:54.071] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1265, y=70, z=-1649} BlockPos{x=-1266, y=70, z=-1650}
[15Jul2024 16:12:32.751] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1284, y=75, z=-1604} BlockPos{x=-1284, y=74, z=-1605}
[15Jul2024 16:26:34.273] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [The Lethal Towers]
[15Jul2024 16:30:54.958] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1677, y=38, z=-1535} BlockPos{x=-1710, y=39, z=-1532}
[15Jul2024 16:30:55.066] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1677, y=38, z=-1535} BlockPos{x=-1710, y=39, z=-1532}
[15Jul2024 16:30:55.066] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1677, y=38, z=-1535} BlockPos{x=-1710, y=39, z=-1532}
[15Jul2024 16:30:55.119] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1677, y=38, z=-1535} BlockPos{x=-1710, y=39, z=-1532}
[15Jul2024 16:30:55.159] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1677, y=38, z=-1535} BlockPos{x=-1710, y=39, z=-1532}
[15Jul2024 16:30:55.266] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1677, y=38, z=-1535} BlockPos{x=-1710, y=39, z=-1532}
[15Jul2024 16:32:51.864] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1711, y=58, z=-1527} BlockPos{x=-1711, y=57, z=-1527}
[15Jul2024 16:32:51.865] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1711, y=58, z=-1527} BlockPos{x=-1711, y=57, z=-1527}
[15Jul2024 16:32:51.896] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1711, y=58, z=-1527} BlockPos{x=-1711, y=57, z=-1527}
[15Jul2024 16:32:51.957] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1711, y=58, z=-1527} BlockPos{x=-1711, y=57, z=-1527}
[15Jul2024 16:32:52.066] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1711, y=58, z=-1527} BlockPos{x=-1711, y=57, z=-1527}
[15Jul2024 16:32:52.066] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1711, y=58, z=-1527} BlockPos{x=-1711, y=57, z=-1527}
[15Jul2024 16:32:52.115] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1711, y=58, z=-1527} BlockPos{x=-1711, y=57, z=-1527}
[15Jul2024 16:33:02.878] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1695, y=64, z=-1515} BlockPos{x=-1693, y=64, z=-1516}
[15Jul2024 16:33:02.878] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1695, y=64, z=-1515} BlockPos{x=-1693, y=64, z=-1516}
[15Jul2024 16:33:02.906] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-1695, y=64, z=-1515} BlockPos{x=-1693, y=64, z=-1516}
[15Jul2024 16:39:17.293] [Worker-Main-24/ERROR] [net.minecraft.world.level.block.entity.SculkSensorBlockEntity/]: No key selector in MapLike[{event_delay:0,event_distance:3.9758217f,range:8,source:{pos:[I;-50,-59,-59],type:"minecraft:block"}}]
[15Jul2024 16:42:46.752] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2310, y=38, z=-1204} BlockPos{x=-2310, y=38, z=-1203}
[15Jul2024 16:42:46.869] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2310, y=38, z=-1204} BlockPos{x=-2310, y=38, z=-1203}
[15Jul2024 16:42:46.870] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2310, y=38, z=-1204} BlockPos{x=-2310, y=38, z=-1203}
[15Jul2024 16:42:46.905] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2310, y=38, z=-1204} BlockPos{x=-2310, y=38, z=-1203}
[15Jul2024 16:42:48.554] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2312, y=41, z=-1202} BlockPos{x=-2311, y=41, z=-1202}
[15Jul2024 16:42:53.370] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2315, y=45, z=-1197} BlockPos{x=-2315, y=46, z=-1196}
[15Jul2024 16:42:53.467] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2315, y=45, z=-1197} BlockPos{x=-2315, y=46, z=-1196}
[15Jul2024 16:42:53.467] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2315, y=45, z=-1197} BlockPos{x=-2315, y=46, z=-1196}
[15Jul2024 16:42:53.509] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2315, y=45, z=-1197} BlockPos{x=-2315, y=46, z=-1196}
[15Jul2024 16:42:53.558] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2315, y=45, z=-1197} BlockPos{x=-2315, y=46, z=-1196}
[15Jul2024 16:42:53.670] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2315, y=45, z=-1197} BlockPos{x=-2315, y=46, z=-1196}
[15Jul2024 16:42:53.671] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2315, y=45, z=-1197} BlockPos{x=-2315, y=46, z=-1196}
[15Jul2024 16:47:02.754] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2766, y=105, z=-1149} BlockPos{x=-2766, y=105, z=-1148}
[15Jul2024 16:47:03.519] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-2766, y=105, z=-1150} BlockPos{x=-2766, y=106, z=-1149}
[15Jul2024 16:49:29.354] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-3234, y=64, z=-1054} BlockPos{x=-3233, y=64, z=-1054}
[15Jul2024 16:49:30.163] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-3238, y=66, z=-1054} BlockPos{x=-3235, y=65, z=-1054}
[15Jul2024 16:49:43.353] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-3265, y=84, z=-1054} BlockPos{x=-3262, y=83, z=-1054}
[15Jul2024 16:55:40.590] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: ioBdaSylemertxE moved too quickly! 2665.176186248934,-8.5,-547.5302997642341
[15Jul2024 16:55:57.053] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2030ms or 40 ticks behind
[15Jul2024 16:56:02.572] [Server thread/INFO] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: ioBdaSylemertxE lost connection: Disconnected
[15Jul2024 16:56:02.572] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE left the game
[15Jul2024 16:56:02.572] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 7aed0a75-9349-4362-9283-bcfdd3b0e80a
[15Jul2024 20:41:49.910] [User Authenticator #29/INFO] [net.minecraft.server.network.ServerLoginPacketListenerImpl/]: UUID of player LocoDestroyo is 83bc8166-9ac9-43f4-9570-1f9ed0214a8a
[15Jul2024 20:41:52.616] [Server thread/INFO] [net.minecraft.server.players.PlayerList/]: LocoDestroyo[/98.47.210.235:60543] logged in with entity id 1119164 at (-217.54985277012048, 70.0, 303.6560572260551)
[15Jul2024 20:41:52.619] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending ToolHandleTypeManager to LocoDestroyo
[15Jul2024 20:41:52.619] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending SnowcapOvenFreezingManager to LocoDestroyo
[15Jul2024 20:41:52.619] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending HorizoniteForgeFuelManager to LocoDestroyo
[15Jul2024 20:41:52.620] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending AlchemyRecipeManager to LocoDestroyo
[15Jul2024 20:41:52.621] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalEntryManager to LocoDestroyo
[15Jul2024 20:41:52.622] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalSectionManager to LocoDestroyo
[15Jul2024 20:41:52.622] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalRequirementManager to LocoDestroyo
[15Jul2024 20:41:52.642] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo joined the game
[15Jul2024 20:41:52.674] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 83bc8166-9ac9-43f4-9570-1f9ed0214a8a
[15Jul2024 20:41:52.678] [Server thread/INFO] [Jade/]: Syncing config to LocoDestroyo (83bc8166-9ac9-43f4-9570-1f9ed0214a8a)
[15Jul2024 20:41:55.253] [Server thread/INFO] [ping-wheel/]: [Ping-Wheel] Channel update: LocoDestroyo -> Global
[15Jul2024 20:41:55.254] [Server thread/INFO] [org.betterx.worlds.together.util.Logger/]: [bclib] Auto-Sync was disabled on the server.
[15Jul2024 20:57:00.585] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2062ms or 41 ticks behind
[15Jul2024 20:57:29.959] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 14385ms or 287 ticks behind
[15Jul2024 21:03:41.971] [User Authenticator #30/INFO] [net.minecraft.server.network.ServerLoginPacketListenerImpl/]: UUID of player ioBdaSylemertxE is 7aed0a75-9349-4362-9283-bcfdd3b0e80a
[15Jul2024 21:03:45.282] [Server thread/INFO] [net.minecraft.server.players.PlayerList/]: ioBdaSylemertxE[/73.231.15.211:63111] logged in with entity id 1129411 at (-274.5, 68.0, 180.5)
[15Jul2024 21:03:45.284] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending ToolHandleTypeManager to ioBdaSylemertxE
[15Jul2024 21:03:45.284] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending SnowcapOvenFreezingManager to ioBdaSylemertxE
[15Jul2024 21:03:45.284] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending HorizoniteForgeFuelManager to ioBdaSylemertxE
[15Jul2024 21:03:45.284] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending AlchemyRecipeManager to ioBdaSylemertxE
[15Jul2024 21:03:45.285] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalEntryManager to ioBdaSylemertxE
[15Jul2024 21:03:45.286] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalSectionManager to ioBdaSylemertxE
[15Jul2024 21:03:45.286] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalRequirementManager to ioBdaSylemertxE
[15Jul2024 21:03:45.304] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE joined the game
[15Jul2024 21:03:45.333] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 7aed0a75-9349-4362-9283-bcfdd3b0e80a
[15Jul2024 21:03:45.336] [Server thread/INFO] [Jade/]: Syncing config to ioBdaSylemertxE (7aed0a75-9349-4362-9283-bcfdd3b0e80a)
[15Jul2024 21:03:49.002] [Server thread/INFO] [ping-wheel/]: [Ping-Wheel] Channel update: ioBdaSylemertxE -> Global
[15Jul2024 21:03:49.002] [Server thread/INFO] [org.betterx.worlds.together.util.Logger/]: [bclib] Auto-Sync was disabled on the server.
[15Jul2024 21:03:51.201] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yo
[15Jul2024 21:05:04.412] [Server thread/WARN] [net.minecraft.world.entity.EntityType/]: Exception loading entity:
net.minecraft.ReportedException: Loading entity NBT
    at net.minecraft.world.entity.Entity.m_20258_(Entity.java:1765) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.world.entity.EntityType.m_185988_(EntityType.java:532) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.Util.m_137521_(Util.java:419) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.world.entity.EntityType.m_20642_(EntityType.java:529) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.world.entity.EntityType.m_20669_(EntityType.java:607) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.world.entity.EntityType.m_20645_(EntityType.java:563) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.world.entity.EntityType$1.m_147056_(EntityType.java:584) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at java.util.Spliterators$IteratorSpliterator.tryAdvance(Spliterators.java:1856) ~[?:?]
    at net.minecraft.world.entity.EntityType$1.tryAdvance(EntityType.java:583) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at java.util.Spliterator.forEachRemaining(Spliterator.java:332) ~[?:?]
    at java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:509) ~[?:?]
    at java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499) ~[?:?]
    at java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:921) ~[?:?]
    at java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234) ~[?:?]
    at java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:682) ~[?:?]
    at net.minecraft.world.level.chunk.storage.EntityStorage.m_223456_(EntityStorage.java:62) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at java.util.concurrent.CompletableFuture$UniApply.tryFire(CompletableFuture.java:646) ~[?:?]
    at java.util.concurrent.CompletableFuture$Completion.run(CompletableFuture.java:482) ~[?:?]
    at net.minecraft.util.thread.ProcessorMailbox.m_18759_(ProcessorMailbox.java:91) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.util.thread.ProcessorMailbox.m_18747_(ProcessorMailbox.java:146) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.util.thread.ProcessorMailbox.run(ProcessorMailbox.java:102) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.TickTask.run(TickTask.java:18) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.util.thread.BlockableEventLoop.m_6367_(BlockableEventLoop.java:156) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.util.thread.ReentrantBlockableEventLoop.m_6367_(ReentrantBlockableEventLoop.java:23) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_6367_(MinecraftServer.java:770) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_6367_(MinecraftServer.java:161) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.util.thread.BlockableEventLoop.m_7245_(BlockableEventLoop.java:130) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_129961_(MinecraftServer.java:753) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_7245_(MinecraftServer.java:747) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.util.thread.BlockableEventLoop.m_18701_(BlockableEventLoop.java:139) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_130012_(MinecraftServer.java:733) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_130011_(MinecraftServer.java:665) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at net.minecraft.server.MinecraftServer.m_206580_(MinecraftServer.java:251) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    at java.lang.Thread.run(Thread.java:833) ~[?:?]
Caused by: java.lang.IllegalStateException: Entity has invalid position
    at net.minecraft.world.entity.Entity.m_20258_(Entity.java:1759) ~[server-1.20.1-20230612.114412-srg.jar%23579!/:?]
    ... 33 more
[15Jul2024 21:05:36.830] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yo
[15Jul2024 21:05:44.837] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I got a new portal
[15Jul2024 21:05:47.459] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> everdawn?
[15Jul2024 21:05:54.798] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yea i accidentally went in
[15Jul2024 21:05:57.598] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> supposedly some bosses but wandered around for a while and couldn't find anything
[15Jul2024 21:06:06.203] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> waiting until elytra + fireworks
[15Jul2024 21:06:21.238] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> thatll make exploration so much easier
[15Jul2024 21:06:37.406] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah I agree
[15Jul2024 21:06:52.975] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> i should make a sugar cane farm
[15Jul2024 21:06:57.268] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> would be cool
[15Jul2024 21:11:10.193] [User Authenticator #31/INFO] [net.minecraft.server.network.ServerLoginPacketListenerImpl/]: UUID of player Sh4d0wb0Y is 45b2f6b2-658b-4c62-9fee-f5d1c770f163
[15Jul2024 21:11:12.845] [Server thread/INFO] [net.minecraft.server.players.PlayerList/]: Sh4d0wb0Y[/172.255.125.179:13944] logged in with entity id 1139005 at (-622.7846218098948, 79.0, 142.85213223593567)
[15Jul2024 21:11:12.847] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending ToolHandleTypeManager to Sh4d0wb0Y
[15Jul2024 21:11:12.847] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending SnowcapOvenFreezingManager to Sh4d0wb0Y
[15Jul2024 21:11:12.847] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending HorizoniteForgeFuelManager to Sh4d0wb0Y
[15Jul2024 21:11:12.847] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending AlchemyRecipeManager to Sh4d0wb0Y
[15Jul2024 21:11:12.848] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalEntryManager to Sh4d0wb0Y
[15Jul2024 21:11:12.849] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalSectionManager to Sh4d0wb0Y
[15Jul2024 21:11:12.849] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalRequirementManager to Sh4d0wb0Y
[15Jul2024 21:11:12.868] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y joined the game
[15Jul2024 21:11:12.885] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 45b2f6b2-658b-4c62-9fee-f5d1c770f163
[15Jul2024 21:11:12.889] [Server thread/INFO] [Jade/]: Syncing config to Sh4d0wb0Y (45b2f6b2-658b-4c62-9fee-f5d1c770f163)
[15Jul2024 21:11:15.776] [Server thread/INFO] [ping-wheel/]: [Ping-Wheel] Channel update: Sh4d0wb0Y -> Global
[15Jul2024 21:11:15.776] [Server thread/INFO] [org.betterx.worlds.together.util.Logger/]: [bclib] Auto-Sync was disabled on the server.
[15Jul2024 21:11:16.642] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yooo
[15Jul2024 21:11:29.575] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> hype
[15Jul2024 21:11:33.028] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> what's up
[15Jul2024 21:11:44.194] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y was blown up by Creeper
[15Jul2024 21:11:47.886] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> guh
[15Jul2024 21:11:49.513] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> so unliucky
[15Jul2024 21:11:50.691] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> WHAT THE HELL
[15Jul2024 21:11:54.336] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> I JUST SPAWNED IN
[15Jul2024 21:11:56.225] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> bro insta died
[15Jul2024 21:12:03.027] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> where are you at
[15Jul2024 21:12:04.093] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> bro was spawncamping
[15Jul2024 21:12:14.205] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2081ms or 41 ticks behind
[15Jul2024 21:12:17.393] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> where are you??
[15Jul2024 21:12:22.507] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I se ehim
[15Jul2024 21:12:23.323] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> at spawn
[15Jul2024 21:12:24.934] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> target spotted
[15Jul2024 21:12:40.036] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> do I snipe him from here
[15Jul2024 21:12:44.244] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> uh
[15Jul2024 21:12:51.814] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> hold on lemme get out the bazooka
[15Jul2024 21:13:17.531] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> why is there just a casual hole to hell
[15Jul2024 21:13:19.301] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> jk lol
[15Jul2024 21:13:26.096] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> natalie is why there is a hole to heck
[15Jul2024 21:13:44.618] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> uh jay run
[15Jul2024 21:13:57.039] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> why is bro running
[15Jul2024 21:14:01.017] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> you dont need to tell me twice
[15Jul2024 21:14:04.442] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> lino has a one hit sword
[15Jul2024 21:14:10.243] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> come back I wanted to give you a friendly weapon
[15Jul2024 21:15:02.098] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> why is he running
[15Jul2024 21:15:05.629] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> why are you running
[15Jul2024 21:15:31.052] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> dude thinks he's dream minecraft
[15Jul2024 21:16:03.701] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> wait bro your dead body is over here
[15Jul2024 21:16:10.713] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> no I dropped my sword come back
[15Jul2024 21:16:27.528] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> thanks
[15Jul2024 21:16:45.570] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> holy lino ur zoo is hug
[15Jul2024 21:16:46.837] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> he's off
[15Jul2024 21:17:00.943] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> are you gonna build your house around the lake next to us or nah
[15Jul2024 21:17:02.821] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2047ms or 40 ticks behind
[15Jul2024 21:17:06.105] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah the zoo is pretty ambitious
[15Jul2024 21:17:08.709] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yeah mostly around the lake
[15Jul2024 21:17:16.285] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> o u meant jay
[15Jul2024 21:17:41.382] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2009ms or 40 ticks behind
[15Jul2024 21:17:54.024] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> @jay
[15Jul2024 21:18:01.605] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: ioBdaSylemertxE moved too quickly! 320.68336227832606,-4.5,40.13598832472252
[15Jul2024 21:18:09.396] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2022ms or 40 ticks behind
[15Jul2024 21:18:23.557] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I gave him the one-tap sword so be careful
[15Jul2024 21:18:29.586] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> he could definitely ninja us
[15Jul2024 21:18:43.417] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2043ms or 40 ticks behind
[15Jul2024 21:18:44.477] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> how much damage does it do??
[15Jul2024 21:18:49.178] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> no idea
[15Jul2024 21:18:56.222] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I got one tapped once against it so
[15Jul2024 21:18:58.594] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> a lot I guess
[15Jul2024 21:19:12.006] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yeah its a lot
[15Jul2024 21:19:16.387] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2014ms or 40 ticks behind
[15Jul2024 21:19:38.621] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> bru u can enchant it too...
[15Jul2024 21:19:43.179] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2005ms or 40 ticks behind
[15Jul2024 21:20:02.114] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah
[15Jul2024 21:20:15.986] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2012ms or 40 ticks behind
[15Jul2024 21:20:40.186] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2013ms or 40 ticks behind
[15Jul2024 21:20:50.772] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> CAT
[15Jul2024 21:20:54.639] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> buh
[15Jul2024 21:20:58.389] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y has made the advancement [Best Friends Forever]
[15Jul2024 21:21:04.229] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> WE WIN THESE
[15Jul2024 21:21:06.789] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2015ms or 40 ticks behind
[15Jul2024 21:21:08.648] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> ONE FISH
[15Jul2024 21:21:30.410] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2036ms or 40 ticks behind
[15Jul2024 21:21:48.265] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> wait what village did you find a cat at....
[15Jul2024 21:21:49.181] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2007ms or 40 ticks behind
[15Jul2024 21:21:53.370] [Server thread/INFO] [net.minecraft.world.entity.LivingEntity/]: Named entity ZombieVillager['Jesse'/1144223, l='ServerLevel[world]', x=-1114.20, y=70.00, z=168.02] died: Jesse was slain by Hector
[15Jul2024 21:22:04.755] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> dude discovered a new village ong
[15Jul2024 21:22:05.776] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> one that had nothing
[15Jul2024 21:22:08.989] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2015ms or 40 ticks behind
[15Jul2024 21:22:18.579] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> oh yeah I accidentally uh
[15Jul2024 21:22:21.162] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah
[15Jul2024 21:22:22.083] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> my bad
[15Jul2024 21:22:30.683] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2009ms or 40 ticks behind
[15Jul2024 21:22:37.734] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-687, y=102, z=121} BlockPos{x=-687, y=102, z=122}
[15Jul2024 21:22:48.110] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2436ms or 48 ticks behind
[15Jul2024 21:23:07.584] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2010ms or 40 ticks behind
[15Jul2024 21:23:28.777] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2004ms or 40 ticks behind
[15Jul2024 21:23:51.987] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2013ms or 40 ticks behind
[15Jul2024 21:24:11.578] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2004ms or 40 ticks behind
[15Jul2024 21:24:29.806] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2032ms or 40 ticks behind
[15Jul2024 21:24:47.061] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2287ms or 45 ticks behind
[15Jul2024 21:24:51.277] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> are there any mobility items
[15Jul2024 21:25:02.847] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> there's a grappling hook
[15Jul2024 21:25:05.052] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2028ms or 40 ticks behind
[15Jul2024 21:25:05.737] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> bet
[15Jul2024 21:25:06.186] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> THERE IS???
[15Jul2024 21:25:08.982] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yeah
[15Jul2024 21:25:14.287] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> bro rahul always keeping the tech to himself ong
[15Jul2024 21:25:15.581] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> but its rly hard to get
[15Jul2024 21:25:22.619] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> i dont even have it
[15Jul2024 21:25:22.842] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2019ms or 40 ticks behind
[15Jul2024 21:25:30.382] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> how do you get losttentacles
[15Jul2024 21:25:32.370] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> the frick is a lost tentacle
[15Jul2024 21:25:36.680] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> u get it when u beat the leviathan
[15Jul2024 21:25:40.379] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2555ms or 51 ticks behind
[15Jul2024 21:25:46.335] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> oh......
[15Jul2024 21:25:49.338] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> ULTRAKILL?!?!?!?
[15Jul2024 21:25:50.239] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah I'm working on it
[15Jul2024 21:25:52.733] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> LEAVIATIHABn
[15Jul2024 21:25:55.826] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> lmfao
[15Jul2024 21:25:59.182] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2008ms or 40 ticks behind
[15Jul2024 21:25:59.730] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> anyone know of any lush caves
[15Jul2024 21:26:08.148] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> didnt u find one?
[15Jul2024 21:26:08.584] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> with some amethyst looking crabs in them
[15Jul2024 21:26:19.238] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> unfortunately no amethyst looking crabs in mine
[15Jul2024 21:26:22.393] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2019ms or 40 ticks behind
[15Jul2024 21:26:34.259] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> maybe try looking for some azalea tress
[15Jul2024 21:26:35.138] [User Authenticator #32/INFO] [net.minecraft.server.network.ServerLoginPacketListenerImpl/]: UUID of player Kinetikid is 60a922e5-91c5-4150-991f-0b7c10753db7
[15Jul2024 21:26:36.505] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> trees
[15Jul2024 21:26:37.921] [Server thread/INFO] [net.minecraft.server.players.PlayerList/]: Kinetikid[/23.118.249.73:55216] logged in with entity id 1147056 at (-120.5, 69.0, 95.5)
[15Jul2024 21:26:37.923] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending ToolHandleTypeManager to Kinetikid
[15Jul2024 21:26:37.923] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending SnowcapOvenFreezingManager to Kinetikid
[15Jul2024 21:26:37.923] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending HorizoniteForgeFuelManager to Kinetikid
[15Jul2024 21:26:37.924] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending AlchemyRecipeManager to Kinetikid
[15Jul2024 21:26:37.924] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalEntryManager to Kinetikid
[15Jul2024 21:26:37.925] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalSectionManager to Kinetikid
[15Jul2024 21:26:37.925] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalRequirementManager to Kinetikid
[15Jul2024 21:26:37.947] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid joined the game
[15Jul2024 21:26:37.973] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 60a922e5-91c5-4150-991f-0b7c10753db7
[15Jul2024 21:26:37.978] [Server thread/INFO] [Jade/]: Syncing config to Kinetikid (60a922e5-91c5-4150-991f-0b7c10753db7)
[15Jul2024 21:26:41.542] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah I tried that first
[15Jul2024 21:26:42.006] [Server thread/INFO] [ping-wheel/]: [Ping-Wheel] Channel update: Kinetikid -> Global
[15Jul2024 21:26:42.007] [Server thread/INFO] [org.betterx.worlds.together.util.Logger/]: [bclib] Auto-Sync was disabled on the server.
[15Jul2024 21:26:42.206] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2032ms or 40 ticks behind
[15Jul2024 21:26:43.096] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> kevin?
[15Jul2024 21:26:43.487] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> wtf this giant sword is a scam
[15Jul2024 21:26:46.224] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> what
[15Jul2024 21:26:53.306] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> hey kevin
[15Jul2024 21:26:55.737] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> it took 3 shots to kill a skeleton
[15Jul2024 21:26:59.507] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> uh
[15Jul2024 21:27:00.692] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3518ms or 70 ticks behind
[15Jul2024 21:27:02.735] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> are you charging it
[15Jul2024 21:27:03.636] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> uh
[15Jul2024 21:27:07.877] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> he's right behind me isn't he
[15Jul2024 21:27:11.996] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> bro is cooked
[15Jul2024 21:27:15.489] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> hey kevin
[15Jul2024 21:27:17.555] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> so uh
[15Jul2024 21:27:19.200] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3526ms or 70 ticks behind
[15Jul2024 21:27:20.195] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> like waiting for its cooldown?
[15Jul2024 21:27:21.330] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> do you want a tour
[15Jul2024 21:27:26.774] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> yeah!
[15Jul2024 21:27:32.655] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y was shot by Skeleton
[15Jul2024 21:27:32.679] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> cool let me uh
[15Jul2024 21:27:34.266] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> head back
[15Jul2024 21:27:37.549] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3375ms or 67 ticks behind
[15Jul2024 21:27:40.062] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> BRUH THIS THING IS A SCAM
[15Jul2024 21:27:46.707] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> make some enderman noises for me
[15Jul2024 21:27:56.333] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3809ms or 76 ticks behind
[15Jul2024 21:27:57.284] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> ora
[15Jul2024 21:27:58.715] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: ioBdaSylemertxE moved too quickly! -27.768726469287685,4.4375,14.71570163025126
[15Jul2024 21:28:07.016] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> what do u think of my skin?
[15Jul2024 21:28:12.196] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> let me see it irl
[15Jul2024 21:28:22.520] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> who that
[15Jul2024 21:28:25.807] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> how do u do that?
[15Jul2024 21:28:29.926] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2002ms or 40 ticks behind
[15Jul2024 21:28:29.969] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> with the typing thing
[15Jul2024 21:28:32.443] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> wtf
[15Jul2024 21:28:34.919] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> oh
[15Jul2024 21:28:40.265] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> why do u say lelellelel
[15Jul2024 21:28:41.921] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> wait it shows that when yure typing?
[15Jul2024 21:28:42.295] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I hate this skin
[15Jul2024 21:28:49.283] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> bro has fairy wings
[15Jul2024 21:28:49.836] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah typing indicators are canon
[15Jul2024 21:28:54.066] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> AHAHAHAHAHA I'M GLAD U LIKE IT
[15Jul2024 21:28:54.891] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> oh yeah long story
[15Jul2024 21:29:00.645] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> which skin lino
[15Jul2024 21:29:05.635] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> normal lino skin
[15Jul2024 21:29:06.017] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> not jotaro
[15Jul2024 21:29:09.302] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> also github skin
[15Jul2024 21:29:10.621] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> jotaro W
[15Jul2024 21:29:13.777] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> also discord skin sometimes
[15Jul2024 21:29:19.638] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> is my skin a W???
[15Jul2024 21:29:25.824] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I think you uh
[15Jul2024 21:29:28.609] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> should be executed
[15Jul2024 21:29:32.762] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> oh my god the tree does the thing
[15Jul2024 21:29:36.653] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> yippee execution!!
[15Jul2024 21:29:37.982] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> say hello to uh rahul's bazooka
[15Jul2024 21:29:42.451] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> lmfao
[15Jul2024 21:29:45.561] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> no thanks
[15Jul2024 21:29:47.444] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> uh
[15Jul2024 21:29:48.566] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> what
[15Jul2024 21:29:49.023] [Server thread/INFO] [com.lothrazar.storagenetwork.StorageNetworkMod/]: Chunk not loadedBlockPos{x=-215, y=68, z=303}
[15Jul2024 21:30:01.163] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> wheres jay
[15Jul2024 21:30:03.763] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> he has a bazooka he blew up my house
[15Jul2024 21:30:11.187] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> YEEEEAAAH
[15Jul2024 21:30:13.816] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> oh that was loud
[15Jul2024 21:30:21.983] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> me next!
[15Jul2024 21:30:25.367] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> u sure
[15Jul2024 21:30:27.815] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> guh
[15Jul2024 21:30:31.443] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> goodbye o7
[15Jul2024 21:30:38.646] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> wait what
[15Jul2024 21:30:38.765] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> oh huh
[15Jul2024 21:30:42.220] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid withered away
[15Jul2024 21:30:42.249] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> damn I must be toug-
[15Jul2024 21:30:43.169] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> that was weaker than I thought
[15Jul2024 21:30:43.614] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! 30.13111011078084,-1.0,-13.78158425587658
[15Jul2024 21:30:48.178] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> oh
[15Jul2024 21:30:50.577] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> oh
[15Jul2024 21:30:54.175] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> sorry
[15Jul2024 21:30:58.576] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> lol
[15Jul2024 21:31:08.262] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> why do I keep hearing *boop* noises
[15Jul2024 21:31:16.056] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay hop in kevin
[15Jul2024 21:31:30.119] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> thats probably the ping button
[15Jul2024 21:31:35.779] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> I see
[15Jul2024 21:31:38.672] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> yup
[15Jul2024 21:31:45.877] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> perrrrty
[15Jul2024 21:31:46.431] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay first spot on our tour
[15Jul2024 21:32:00.999] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> this is prism's house / daksh's house
[15Jul2024 21:32:09.634] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> this is the github server room
[15Jul2024 21:32:10.271] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> MARRIED!! :D
[15Jul2024 21:32:15.572] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yep married
[15Jul2024 21:32:16.344] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> lmfao
[15Jul2024 21:32:21.328] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2004ms or 40 ticks behind
[15Jul2024 21:32:27.565] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> why does the github have shrimp in it
[15Jul2024 21:32:27.672] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> over here is the portal room
[15Jul2024 21:32:32.074] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> long story
[15Jul2024 21:32:41.616] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> we don't talk about the portals
[15Jul2024 21:32:43.335] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2011ms or 40 ticks behind
[15Jul2024 21:32:44.318] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> what's this one on the end?
[15Jul2024 21:32:47.219] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> why not?
[15Jul2024 21:32:50.694] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> that's the bug one
[15Jul2024 21:32:54.625] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> do you want to see giant bugs
[15Jul2024 21:32:57.554] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> my people need me
[15Jul2024 21:33:00.095] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> no no no
[15Jul2024 21:33:01.137] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> come back
[15Jul2024 21:33:04.226] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> AHAHAHAAH
[15Jul2024 21:33:06.143] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2020ms or 40 ticks behind
[15Jul2024 21:33:07.972] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> wait until the tour is over
[15Jul2024 21:33:08.834] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> lmfao
[15Jul2024 21:33:13.549] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> dip
[15Jul2024 21:33:14.926] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> hot tub
[15Jul2024 21:33:24.942] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2019ms or 40 ticks behind
[15Jul2024 21:33:35.196] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I'll get you some foo
[15Jul2024 21:33:36.748] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> d
[15Jul2024 21:33:41.148] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> this is my base
[15Jul2024 21:33:42.612] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> I got 33 potatoes I'm chilling
[15Jul2024 21:33:42.755] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2031ms or 40 ticks behind
[15Jul2024 21:33:53.946] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> it has rice out front to remind me of my heritage
[15Jul2024 21:34:00.330] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2007ms or 40 ticks behind
[15Jul2024 21:34:01.476] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> :skull:
[15Jul2024 21:34:14.174] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> woah!
[15Jul2024 21:34:14.835] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay this is my bedroom
[15Jul2024 21:34:17.933] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2009ms or 40 ticks behind
[15Jul2024 21:34:23.892] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> this is the aether room if I had aether stuff
[15Jul2024 21:34:28.226] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> lmao
[15Jul2024 21:34:28.493] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> fishing dock ofc
[15Jul2024 21:34:34.487] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> cool banners
[15Jul2024 21:34:38.341] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2018ms or 40 ticks behind
[15Jul2024 21:34:38.588] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> ofc ofc
[15Jul2024 21:34:45.891] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> next level up
[15Jul2024 21:34:52.921] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> aquarium
[15Jul2024 21:34:54.755] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> feesh
[15Jul2024 21:34:56.333] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2010ms or 40 ticks behind
[15Jul2024 21:34:59.942] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> uh the hall :tm:
[15Jul2024 21:35:03.469] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> aether dude!
[15Jul2024 21:35:07.403] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah
[15Jul2024 21:35:12.183] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [To Infinity and Beyond!]
[15Jul2024 21:35:16.927] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2004ms or 40 ticks behind
[15Jul2024 21:35:18.068] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> oops
[15Jul2024 21:35:20.270] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> bro missed
[15Jul2024 21:35:23.011] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> not the timer
[15Jul2024 21:35:29.360] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> well not much up here for now, just an island
[15Jul2024 21:35:33.406] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> uh yeah i am
[15Jul2024 21:35:37.977] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> BEEEP BEEP BEEP
[15Jul2024 21:35:40.339] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> UR FOOD IS READY
[15Jul2024 21:35:43.130] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2006ms or 40 ticks behind
[15Jul2024 21:35:50.244] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> wait
[15Jul2024 21:35:52.791] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> where's the thng
[15Jul2024 21:35:53.325] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> third level is bar / castle / aquarium
[15Jul2024 21:36:03.349] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> AAAAA
[15Jul2024 21:36:04.162] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> guh
[15Jul2024 21:36:05.153] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2029ms or 40 ticks behind
[15Jul2024 21:36:06.595] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> bro is not the jumper
[15Jul2024 21:36:15.975] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> you can stand in the clouds if you want to
[15Jul2024 21:36:26.126] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2003ms or 40 ticks behind
[15Jul2024 21:36:29.045] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> gggg
[15Jul2024 21:36:29.045] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> got it
[15Jul2024 21:36:33.396] [User Authenticator #33/INFO] [net.minecraft.server.network.ServerLoginPacketListenerImpl/]: UUID of player DragonDSX is 091fe9d0-8597-487a-9184-0b1be889db9d
[15Jul2024 21:36:36.466] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> hi
[15Jul2024 21:36:36.817] [Server thread/INFO] [net.minecraft.server.players.PlayerList/]: DragonDSX[/73.189.150.220:62195] logged in with entity id 1156274 at (-332.04477049633056, 78.0, 243.74936024873026)
[15Jul2024 21:36:36.819] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending ToolHandleTypeManager to DragonDSX
[15Jul2024 21:36:36.819] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending SnowcapOvenFreezingManager to DragonDSX
[15Jul2024 21:36:36.819] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending HorizoniteForgeFuelManager to DragonDSX
[15Jul2024 21:36:36.820] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending AlchemyRecipeManager to DragonDSX
[15Jul2024 21:36:36.820] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalEntryManager to DragonDSX
[15Jul2024 21:36:36.821] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalSectionManager to DragonDSX
[15Jul2024 21:36:36.821] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalRequirementManager to DragonDSX
[15Jul2024 21:36:36.844] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX joined the game
[15Jul2024 21:36:36.874] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 091fe9d0-8597-487a-9184-0b1be889db9d
[15Jul2024 21:36:36.878] [Server thread/INFO] [Jade/]: Syncing config to DragonDSX (091fe9d0-8597-487a-9184-0b1be889db9d)
[15Jul2024 21:36:40.068] [Server thread/INFO] [ping-wheel/]: [Ping-Wheel] Channel update: DragonDSX -> Global
[15Jul2024 21:36:40.069] [Server thread/INFO] [org.betterx.worlds.together.util.Logger/]: [bclib] Auto-Sync was disabled on the server.
[15Jul2024 21:36:40.217] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yippeeee
[15Jul2024 21:36:43.614] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2490ms or 49 ticks behind
[15Jul2024 21:36:57.471] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y has made the advancement [Not Today, Thank You]
[15Jul2024 21:36:59.380] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> care for a drink
[15Jul2024 21:37:02.155] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3582ms or 71 ticks behind
[15Jul2024 21:37:03.958] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> absolutely!
[15Jul2024 21:37:09.629] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> here my friend
[15Jul2024 21:37:12.185] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> cheapest price
[15Jul2024 21:37:17.273] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> how do I drink it...
[15Jul2024 21:37:18.399] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> (is it drinkable?)
[15Jul2024 21:37:21.041] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3917ms or 78 ticks behind
[15Jul2024 21:37:23.254] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> (no :( )
[15Jul2024 21:37:32.176] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> second best option
[15Jul2024 21:37:40.253] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4229ms or 84 ticks behind
[15Jul2024 21:37:45.069] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> the made the weirdest sound ever
[15Jul2024 21:37:46.860] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yooo daksh
[15Jul2024 21:37:49.374] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> never drink in my bar again
[15Jul2024 21:37:52.268] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> that's just the noise I make
[15Jul2024 21:37:54.589] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> hey wth
[15Jul2024 21:37:58.657] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3434ms or 68 ticks behind
[15Jul2024 21:38:05.609] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> rude lino arc
[15Jul2024 21:38:16.347] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2723ms or 54 ticks behind
[15Jul2024 21:38:19.325] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> this is my view of the green light across the harbor
[15Jul2024 21:38:29.405] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> lmaooo
[15Jul2024 21:38:30.585] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> ykwim?
[15Jul2024 21:38:34.254] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2930ms or 58 ticks behind
[15Jul2024 21:38:35.715] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> Hey wanna join me in my convertible?
[15Jul2024 21:38:39.490] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> I've got a pool too
[15Jul2024 21:38:43.715] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> literally me
[15Jul2024 21:38:48.698] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I host a bunch of big parties but
[15Jul2024 21:38:51.956] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2732ms or 54 ticks behind
[15Jul2024 21:38:52.422] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> the one never shows up
[15Jul2024 21:38:54.115] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> guys the green light represents how Lino likes money
[15Jul2024 21:38:54.616] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> maybe someday
[15Jul2024 21:38:58.379] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> GUH
[15Jul2024 21:39:02.077] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> trust
[15Jul2024 21:39:09.732] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay fifth floor
[15Jul2024 21:39:09.970] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3046ms or 60 ticks behind
[15Jul2024 21:39:19.138] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> we feast here
[15Jul2024 21:39:21.586] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> I'm so.... wait what was his name?
[15Jul2024 21:39:28.148] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> in gatsby?
[15Jul2024 21:39:28.302] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3379ms or 67 ticks behind
[15Jul2024 21:39:31.941] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> the non-gatsby guy?
[15Jul2024 21:39:34.077] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> gary?
[15Jul2024 21:39:36.984] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> GARY
[15Jul2024 21:39:39.304] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> not gary
[15Jul2024 21:39:42.080] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> something
[15Jul2024 21:39:45.588] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> GARY IS CRAZY
[15Jul2024 21:39:47.288] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4014ms or 80 ticks behind
[15Jul2024 21:39:51.401] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> ok fr tho what was his name
[15Jul2024 21:40:01.312] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> nick?
[15Jul2024 21:40:05.559] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> YEAH
[15Jul2024 21:40:06.044] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3770ms or 75 ticks behind
[15Jul2024 21:40:08.481] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> I'm so nick pilled
[15Jul2024 21:40:10.447] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> ur gatsby
[15Jul2024 21:40:11.441] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> fr fr
[15Jul2024 21:40:12.725] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> wait can you breed bison
[15Jul2024 21:40:12.962] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> lol
[15Jul2024 21:40:16.310] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> you can
[15Jul2024 21:40:19.253] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> yooo
[15Jul2024 21:40:21.242] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> well my friend
[15Jul2024 21:40:23.578] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> they give so much meat
[15Jul2024 21:40:24.687] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3663ms or 73 ticks behind
[15Jul2024 21:40:29.677] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> aight im on what why how
[15Jul2024 21:40:31.766] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I have a gift for you
[15Jul2024 21:40:32.721] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> food on plate :)
[15Jul2024 21:40:36.672] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> :D
[15Jul2024 21:40:44.586] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4912ms or 98 ticks behind
[15Jul2024 21:40:52.334] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> hmm let me think
[15Jul2024 21:40:58.975] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> potato?? :eyes:
[15Jul2024 21:41:03.848] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4274ms or 85 ticks behind
[15Jul2024 21:41:05.944] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Cover Me with Diamonds]
[15Jul2024 21:41:10.212] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> yoo
[15Jul2024 21:41:14.276] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> yooooooooo
[15Jul2024 21:41:16.337] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> thanks!!!
[15Jul2024 21:41:24.661] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 5838ms or 116 ticks behind
[15Jul2024 21:41:24.925] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> getting the real gatsby treatment out here!
[15Jul2024 21:41:27.115] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> wait
[15Jul2024 21:41:32.091] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> right click does something different
[15Jul2024 21:41:34.848] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> asks me what floor I'm on?
[15Jul2024 21:41:43.977] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay and my best gift of all
[15Jul2024 21:41:44.129] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4505ms or 90 ticks behind
[15Jul2024 21:41:47.346] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> oh that was elevator
[15Jul2024 21:41:53.482] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> yay!!!!!!
[15Jul2024 21:41:54.954] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> meef
[15Jul2024 21:42:02.311] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> YIPPEEEE
[15Jul2024 21:42:02.781] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3657ms or 73 ticks behind
[15Jul2024 21:42:05.457] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> wait
[15Jul2024 21:42:06.880] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> meef?
[15Jul2024 21:42:09.394] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> meef
[15Jul2024 21:42:13.815] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> oh
[15Jul2024 21:42:18.490] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> ok!
[15Jul2024 21:42:20.918] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3144ms or 62 ticks behind
[15Jul2024 21:42:21.252] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay hold on I'm trolling
[15Jul2024 21:42:32.491] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> oh do u want the stuff back?
[15Jul2024 21:42:39.028] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I forgot the pickaxe
[15Jul2024 21:42:39.562] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3688ms or 73 ticks behind
[15Jul2024 21:42:44.084] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> oh thanks!!
[15Jul2024 21:42:55.476] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> and whatever that is
[15Jul2024 21:42:56.811] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> ooooooo
[15Jul2024 21:42:56.811] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2287ms or 45 ticks behind
[15Jul2024 21:42:57.293] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> idk what it does
[15Jul2024 21:42:58.826] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> have fun
[15Jul2024 21:43:03.216] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay back to the tour
[15Jul2024 21:43:10.177] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> nick I have a lot to show you
[15Jul2024 21:43:12.000] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> where boat
[15Jul2024 21:43:20.779] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2005ms or 40 ticks behind
[15Jul2024 21:43:31.105] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> turtle?
[15Jul2024 21:43:35.352] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay I'm getting another limo this one sucks
[15Jul2024 21:43:41.581] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2007ms or 40 ticks behind
[15Jul2024 21:43:45.273] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> why am i jumpy
[15Jul2024 21:43:47.402] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> is that a turtle?
[15Jul2024 21:43:50.568] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah
[15Jul2024 21:43:52.594] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> it's fiesty
[15Jul2024 21:43:53.046] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> sick
[15Jul2024 21:43:58.632] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> I'm so excited, what a cool car
[15Jul2024 21:44:01.994] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2020ms or 40 ticks behind
[15Jul2024 21:44:05.945] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> this house idk who's it is
[15Jul2024 21:44:10.810] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> wait daksh is this your house
[15Jul2024 21:44:13.465] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> long leg house
[15Jul2024 21:44:19.869] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> wait I thought they were married?
[15Jul2024 21:44:20.045] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I thought you were married to prism's house
[15Jul2024 21:44:27.411] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> Daksh and prism divorce??? :(((
[15Jul2024 21:44:35.487] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2113ms or 42 ticks behind
[15Jul2024 21:44:44.910] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> hi
[15Jul2024 21:44:46.360] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> what
[15Jul2024 21:44:49.201] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX has made the advancement [Cover Me with Diamonds]
[15Jul2024 21:45:05.222] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> did u guys get a divorce?
[15Jul2024 21:45:06.207] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> oh I moved to this so I could build a funny then forgot this erver existed
[15Jul2024 21:45:12.503] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> did you?
[15Jul2024 21:45:17.194] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> yes
[15Jul2024 21:45:17.194] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> HE STOLE OUR CAR
[15Jul2024 21:45:20.621] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> :(
[15Jul2024 21:45:23.602] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> theres cats???
[15Jul2024 21:45:25.479] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> wth
[15Jul2024 21:45:26.263] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> JAY GET BACK HERE
[15Jul2024 21:45:27.111] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> where
[15Jul2024 21:45:31.894] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> look again
[15Jul2024 21:45:36.974] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> what am I looking at
[15Jul2024 21:45:40.155] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> BRO
[15Jul2024 21:45:40.350] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> woah!
[15Jul2024 21:45:41.721] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> CHILL
[15Jul2024 21:45:44.547] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> this thing's cool!
[15Jul2024 21:45:49.559] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> i actually got a heart attack
[15Jul2024 21:45:52.606] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> gonna burn down the ecosystem
[15Jul2024 21:45:53.080] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> AHAHAHAHA
[15Jul2024 21:45:58.663] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> water
[15Jul2024 21:46:10.086] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I was wondering why it was called that
[15Jul2024 21:46:11.515] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2041ms or 40 ticks behind
[15Jul2024 21:46:17.764] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> whats a good palce to mine?
[15Jul2024 21:46:19.706] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> thats it
[15Jul2024 21:46:20.154] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> lol
[15Jul2024 21:46:22.651] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> it does what it says on the tin
[15Jul2024 21:46:24.893] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> uh oh
[15Jul2024 21:46:25.826] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> ok so how do we beat the leviathan
[15Jul2024 21:46:26.030] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> im turning into a tornado
[15Jul2024 21:46:32.393] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> uh oh
[15Jul2024 21:46:34.261] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> watch him
[15Jul2024 21:46:37.783] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> turtle!!
[15Jul2024 21:46:42.905] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> I might make a nether portal and find a mine a few thousand blocks away
[15Jul2024 21:46:43.767] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> YOU MISSED THE TORNADO
[15Jul2024 21:46:48.883] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> oh sorry
[15Jul2024 21:46:55.129] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> woah!!
[15Jul2024 21:46:58.478] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2004ms or 40 ticks behind
[15Jul2024 21:47:02.779] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> HEY
[15Jul2024 21:47:04.563] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> PUT HIM DOWN
[15Jul2024 21:47:07.780] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> how did you do thst
[15Jul2024 21:47:08.777] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> shaken turtle syndrome
[15Jul2024 21:47:22.159] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> crouch right click
[15Jul2024 21:47:27.203] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> that's it I'm putting you in a cage kevin
[15Jul2024 21:47:36.553] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> I PUT IT ON
[15Jul2024 21:47:39.861] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> you what
[15Jul2024 21:47:40.058] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> PRESS F5
[15Jul2024 21:47:42.922] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> TURTLE ON U
[15Jul2024 21:47:48.088] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> what am I watching
[15Jul2024 21:47:51.251] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> where
[15Jul2024 21:47:55.722] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> TURTLE ON HEAD STILL
[15Jul2024 21:47:57.551] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> am I blind
[15Jul2024 21:47:59.325] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> RAHUL
[15Jul2024 21:48:03.216] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> hi
[15Jul2024 21:48:07.113] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> YO
[15Jul2024 21:48:08.908] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> PRESS F5
[15Jul2024 21:48:09.713] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> TURTLE ON HEAD
[15Jul2024 21:48:11.367] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> TURTLE ON U
[15Jul2024 21:48:12.534] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> wot
[15Jul2024 21:48:13.931] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> rahul Im going to touch you
[15Jul2024 21:48:14.537] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> TURTLE IN HEAD?
[15Jul2024 21:48:23.485] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> i literally see nothing
[15Jul2024 21:48:28.914] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> not in front of the turtle
[15Jul2024 21:48:32.876] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2002ms or 40 ticks behind
[15Jul2024 21:48:43.366] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> wot the hell
[15Jul2024 21:48:48.847] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y has made the advancement [Diamonds!]
[15Jul2024 21:48:52.256] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> lol
[15Jul2024 21:49:01.990] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> aight guys
[15Jul2024 21:49:03.375] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I realize
[15Jul2024 21:49:04.861] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> time for diamond hoe
[15Jul2024 21:49:07.432] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> we don't know where the end portal is
[15Jul2024 21:49:18.213] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> let's wait for prism to hop on
[15Jul2024 21:49:21.413] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> lino turtle
[15Jul2024 21:49:30.501] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> nuh uh
[15Jul2024 21:49:35.262] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> wait the user can't see it???
[15Jul2024 21:49:40.691] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> f5 doesn't work?
[15Jul2024 21:49:44.279] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2006ms or 40 ticks behind
[15Jul2024 21:49:45.372] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> this is a great prank
[15Jul2024 21:49:47.495] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> my turtle now
[15Jul2024 21:49:58.415] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> what's the best place to get movement stuff
[15Jul2024 21:50:07.671] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> uh the aether has this armor but it's tough as heck to get
[15Jul2024 21:50:08.550] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> or ig dragon will give us elytra access
[15Jul2024 21:50:12.737] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah
[15Jul2024 21:50:15.684] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2011ms or 40 ticks behind
[15Jul2024 21:50:19.061] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> i need me a grappling hook
[15Jul2024 21:50:24.401] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> YOOOOO WAIT YEAH
[15Jul2024 21:50:25.802] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> how fight leviathan
[15Jul2024 21:50:26.073] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> HOW GET
[15Jul2024 21:50:30.899] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> elytras are craftable so once we kill the dragon everyone can get it
[15Jul2024 21:50:31.270] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> gl
[15Jul2024 21:50:34.139] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> @jay we need to find
[15Jul2024 21:50:37.026] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> lush caves
[15Jul2024 21:50:37.998] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> wait but how do we get grapple
[15Jul2024 21:50:40.502] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> for amethyst crabs
[15Jul2024 21:50:51.062] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> turtled :)
[15Jul2024 21:50:58.040] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> aight time to get an absurd amount of lava
[15Jul2024 21:51:03.083] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> for what...
[15Jul2024 21:51:07.684] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2010ms or 40 ticks behind
[15Jul2024 21:51:08.426] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> nether portals
[15Jul2024 21:51:11.361] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> whoever dug this hole to the void is goated
[15Jul2024 21:51:13.218] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> need to find a mine that isnt here
[15Jul2024 21:51:22.984] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> here you go
[15Jul2024 21:51:32.761] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> how
[15Jul2024 21:51:32.984] [User Authenticator #34/INFO] [net.minecraft.server.network.ServerLoginPacketListenerImpl/]: UUID of player Prsid is f8cf9718-2e0d-4902-a500-61408a4b1824
[15Jul2024 21:51:35.745] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> long story
[15Jul2024 21:51:35.800] [Server thread/INFO] [net.minecraft.server.players.PlayerList/]: Prsid[/172.124.234.235:57032] logged in with entity id 1172108 at (-783.4408806455153, 161.0, -4512.497150365663)
[15Jul2024 21:51:35.802] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending ToolHandleTypeManager to Prsid
[15Jul2024 21:51:35.802] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending SnowcapOvenFreezingManager to Prsid
[15Jul2024 21:51:35.803] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending HorizoniteForgeFuelManager to Prsid
[15Jul2024 21:51:35.803] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending AlchemyRecipeManager to Prsid
[15Jul2024 21:51:35.804] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalEntryManager to Prsid
[15Jul2024 21:51:35.804] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalSectionManager to Prsid
[15Jul2024 21:51:35.805] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalRequirementManager to Prsid
[15Jul2024 21:51:35.825] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid joined the game
[15Jul2024 21:51:35.840] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for f8cf9718-2e0d-4902-a500-61408a4b1824
[15Jul2024 21:51:35.844] [Server thread/INFO] [Jade/]: Syncing config to Prsid (f8cf9718-2e0d-4902-a500-61408a4b1824)
[15Jul2024 21:51:36.132] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2059ms or 41 ticks behind
[15Jul2024 21:51:37.443] [Server thread/INFO] [ping-wheel/]: [Ping-Wheel] Channel update: Prsid -> Global
[15Jul2024 21:51:37.444] [Server thread/INFO] [org.betterx.worlds.together.util.Logger/]: [bclib] Auto-Sync was disabled on the server.
[15Jul2024 21:51:38.527] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> wait is there grapple hook?
[15Jul2024 21:51:41.123] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yippeee prism joiined
[15Jul2024 21:51:42.623] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> holy crap
[15Jul2024 21:51:43.192] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> no one has it
[15Jul2024 21:51:44.032] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> 64
[15Jul2024 21:51:44.517] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> yay!
[15Jul2024 21:51:45.250] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> thx
[15Jul2024 21:51:50.927] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> sup
[15Jul2024 21:51:51.742] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> aight Im going on a journey
[15Jul2024 21:51:51.860] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay are we running the ender dragon
[15Jul2024 21:51:54.372] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3248ms or 64 ticks behind
[15Jul2024 21:52:00.790] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> oh wait I shoulkd prolyl get a bow
[15Jul2024 21:52:01.078] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> down
[15Jul2024 21:52:01.564] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> is the leviathan spawned with amethyst crabs or whatev?
[15Jul2024 21:52:05.201] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> what about that slime thing I've seen in some modded stuff
[15Jul2024 21:52:13.047] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3723ms or 74 ticks behind
[15Jul2024 21:52:20.036] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> we need the amethyst crabs to fight the leviathan unless you want to get instakilled w/ full netherrite
[15Jul2024 21:52:31.361] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3337ms or 66 ticks behind
[15Jul2024 21:52:41.702] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> we turn the amethyst crab legs into blessed amethyst crab legs to counter the magic attack of the leviathan
[15Jul2024 21:52:44.756] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> anyone have some string I can steal
[15Jul2024 21:52:50.260] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah
[15Jul2024 21:52:50.260] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3936ms or 78 ticks behind
[15Jul2024 21:52:54.806] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> ihow much you need
[15Jul2024 21:53:02.694] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> BRO
[15Jul2024 21:53:04.430] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> fly goodbye
[15Jul2024 21:53:05.459] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> buh
[15Jul2024 21:53:05.693] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> like 2
[15Jul2024 21:53:08.114] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2890ms or 57 ticks behind
[15Jul2024 21:53:08.355] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> or 3
[15Jul2024 21:53:10.285] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> coming
[15Jul2024 21:53:11.361] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> gonna make a bow
[15Jul2024 21:53:15.282] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> who's kinetikkid
[15Jul2024 21:53:17.500] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> do i know them?
[15Jul2024 21:53:18.811] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> me
[15Jul2024 21:53:20.929] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> kevin
[15Jul2024 21:53:21.935] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> nick
[15Jul2024 21:53:21.982] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> yes
[15Jul2024 21:53:25.892] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2818ms or 56 ticks behind
[15Jul2024 21:53:26.865] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> nick
[15Jul2024 21:53:28.275] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> from the great gyatsby
[15Jul2024 21:53:33.003] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> damn
[15Jul2024 21:53:35.102] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> string dropped off
[15Jul2024 21:53:38.039] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> have fun dakshj
[15Jul2024 21:53:41.049] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> thx
[15Jul2024 21:53:44.551] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3678ms or 73 ticks behind
[15Jul2024 21:53:45.721] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> wait are we e dragoning?
[15Jul2024 21:53:49.338] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> or should I go explore?
[15Jul2024 21:53:49.953] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yep
[15Jul2024 21:53:54.572] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> yep?
[15Jul2024 21:53:57.268] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> chunk load fail
[15Jul2024 21:54:01.402] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> where
[15Jul2024 21:54:01.896] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2372ms or 47 ticks behind
[15Jul2024 21:54:08.241] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> the nether, my ice bridge
[15Jul2024 21:54:08.823] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> epic ~~embed~~ chunk load fail
[15Jul2024 21:54:15.061] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> ^^
[15Jul2024 21:54:16.035] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> your server isn't boatpilled
[15Jul2024 21:54:19.705] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2831ms or 56 ticks behind
[15Jul2024 21:54:25.638] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.18764838497489222,0.0,10.392999855987881
[15Jul2024 21:54:25.638] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.20012845012979597,0.0,12.520174887411372
[15Jul2024 21:54:25.638] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.20457034688149633,0.0,14.644040109791206
[15Jul2024 21:54:25.638] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.20258801225722323,0.0,16.764922556621258
[15Jul2024 21:54:25.638] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.19643469245887957,0.0,18.883164755823884
[15Jul2024 21:54:25.639] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.18828470405583175,0.0,20.99898574220495
[15Jul2024 21:54:25.639] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.18023635605982236,0.0,23.112490296166328
[15Jul2024 21:54:25.678] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.007927783653585152,0.0,16.942004797175287
[15Jul2024 21:54:26.391] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! 0.8054597257835354,0.0,10.413694045485386
[15Jul2024 21:54:36.079] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.31006500704863527,0.0,11.535292411434597
[15Jul2024 21:54:37.998] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.5856671215917686,0.0,10.624979780041937
[15Jul2024 21:54:37.998] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.7015033633958154,0.0,12.333445452366018
[15Jul2024 21:54:37.998] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.8150228825731887,0.0,14.007741843830013
[15Jul2024 21:54:37.998] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -0.9262720135322269,0.0,15.648552339399398
[15Jul2024 21:54:37.999] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Prsid) moved too quickly! -1.0352961639939906,0.0,17.256546656353372
[15Jul2024 21:54:41.262] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6588ms or 131 ticks behind
[15Jul2024 21:54:43.488] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> where is everyone?
[15Jul2024 21:54:49.012] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> yooo wait minipam
[15Jul2024 21:54:49.053] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=0, y=0, z=0} BlockPos{x=-92, y=127, z=5}
[15Jul2024 21:54:50.835] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> minipenam
[15Jul2024 21:54:52.227] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> how do i get out of a boat
[15Jul2024 21:54:55.004] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> yminimoap
[15Jul2024 21:54:55.556] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> oh that worked
[15Jul2024 21:54:56.521] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> shift
[15Jul2024 21:54:59.905] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3681ms or 73 ticks behind
[15Jul2024 21:55:03.693] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay who wants to join me on finding the end portal
[15Jul2024 21:55:04.783] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> what should i use my diamonds on first
[15Jul2024 21:55:09.435] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> hoe
[15Jul2024 21:55:12.725] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> bet
[15Jul2024 21:55:13.088] [Server thread/INFO] [liecounter/]: Prsid: /lie sync 60a922e5-91c5-4150-991f-0b7c10753db7 475101084625534977
[15Jul2024 21:55:13.714] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Synced lies of Kinetikid to 475101084625534977. Congratulations!
[15Jul2024 21:55:16.331] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> yw
[15Jul2024 21:55:18.600] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3726ms or 74 ticks behind
[15Jul2024 21:55:21.649] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> bruh
[15Jul2024 21:55:22.844] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> how
[15Jul2024 21:55:25.252] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> how?
[15Jul2024 21:55:28.334] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> lie counter in minecraft
[15Jul2024 21:55:28.565] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> oh wait nvm
[15Jul2024 21:55:31.142] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> thats a discord id
[15Jul2024 21:55:36.564] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2991ms or 59 ticks behind
[15Jul2024 21:55:39.693] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> bro lied up to the int max
[15Jul2024 21:55:42.836] [Server thread/INFO] [liecounter/]: ioBdaSylemertxE: /lie count DragonDSX
[15Jul2024 21:55:42.906] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX has lied 8 times.
[15Jul2024 21:55:47.896] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> how is that a lie
[15Jul2024 21:55:49.003] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> when edragon?
[15Jul2024 21:55:49.954] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> i was too lazy to add the additional discord api call
[15Jul2024 21:55:51.491] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> nvm thats a counter
[15Jul2024 21:55:53.946] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2422ms or 48 ticks behind
[15Jul2024 21:55:54.846] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> wait what
[15Jul2024 21:55:55.296] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> that way
[15Jul2024 21:55:56.692] [Server thread/INFO] [liecounter/]: Prsid: /lie count Kinetikid
[15Jul2024 21:55:56.761] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has lied 13 times.
[15Jul2024 21:55:57.939] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> why so many lies?
[15Jul2024 21:56:04.821] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> that's your discord uid
[15Jul2024 21:56:07.777] [Server thread/INFO] [liecounter/]: Kinetikid: /lie add Prsid
[15Jul2024 21:56:07.919] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has lied 20 times.
[15Jul2024 21:56:10.122] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> kevin do you have a sleeping bag
[15Jul2024 21:56:11.615] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2691ms or 53 ticks behind
[15Jul2024 21:56:12.322] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y has made the advancement [Suit Up]
[15Jul2024 21:56:14.636] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> no...
[15Jul2024 21:56:24.338] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> where yall at
[15Jul2024 21:56:26.361] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> smh we can't just share one :/
[15Jul2024 21:56:26.439] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> i need pants
[15Jul2024 21:56:29.743] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3170ms or 63 ticks behind
[15Jul2024 21:56:31.650] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay kevin
[15Jul2024 21:56:34.308] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> don't we all jay
[15Jul2024 21:56:36.999] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> make sure to set a waystone
[15Jul2024 21:56:39.449] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> have you done that yet
[15Jul2024 21:56:40.793] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> where?
[15Jul2024 21:56:44.211] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> no
[15Jul2024 21:56:46.804] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> lino can you tp me over to you
[15Jul2024 21:56:47.131] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2007ms or 40 ticks behind
[15Jul2024 21:56:50.673] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> where you at
[15Jul2024 21:56:56.403] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> home
[15Jul2024 21:57:01.475] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> ...which is where
[15Jul2024 21:57:04.527] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2003ms or 40 ticks behind
[15Jul2024 21:57:07.172] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> next to yours
[15Jul2024 21:57:11.426] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> -234 64 200
[15Jul2024 21:57:11.730] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> wait Lino where do I set spawn
[15Jul2024 21:57:12.058] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> oh were' right next to you
[15Jul2024 21:57:16.712] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> come with me
[15Jul2024 21:57:21.645] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> snadwich
[15Jul2024 21:57:21.793] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2269ms or 45 ticks behind
[15Jul2024 21:57:22.141] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> you can crash at my place for now
[15Jul2024 21:57:24.483] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> share minimap location?
[15Jul2024 21:57:28.999] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> meef
[15Jul2024 21:57:37.557] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> literally at my house prism
[15Jul2024 21:57:38.908] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2134ms or 42 ticks behind
[15Jul2024 21:57:42.799] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> hello
[15Jul2024 21:57:45.548] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> hello
[15Jul2024 21:57:48.847] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> set spawn here
[15Jul2024 21:57:51.210] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> why do you have wings
[15Jul2024 21:57:54.203] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> how do you ahve wings
[15Jul2024 21:57:55.100] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> logn story
[15Jul2024 21:57:55.577] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> yippee
[15Jul2024 21:57:55.984] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2110ms or 42 ticks behind
[15Jul2024 21:57:57.391] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> woah
[15Jul2024 21:57:58.967] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> kevin
[15Jul2024 21:58:00.298] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> got a bow?
[15Jul2024 21:58:00.591] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> cool skin prsid
[15Jul2024 21:58:02.606] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> thank
[15Jul2024 21:58:02.899] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> make sure to touch this magic rock
[15Jul2024 21:58:04.376] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> you too
[15Jul2024 21:58:13.474] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2500ms or 50 ticks behind
[15Jul2024 21:58:14.285] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> rainbow is modded thing
[15Jul2024 21:58:16.934] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> niiiice
[15Jul2024 21:58:21.544] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> what do u think of mine?
[15Jul2024 21:58:21.756] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> kevin?
[15Jul2024 21:58:22.009] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> i frogror how i got this
[15Jul2024 21:58:22.261] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> rainbow?
[15Jul2024 21:58:23.711] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> it's good
[15Jul2024 21:58:29.002] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> thx
[15Jul2024 21:58:34.677] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2003ms or 40 ticks behind
[15Jul2024 21:58:43.268] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> did you set the waystone
[15Jul2024 21:58:49.032] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> yay!
[15Jul2024 21:58:51.684] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2010ms or 40 ticks behind
[15Jul2024 21:58:53.409] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> it made a noise!
[15Jul2024 21:58:54.559] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> can I steal some feathers for some arrows?
[15Jul2024 21:59:02.957] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I have 2k daksh
[15Jul2024 21:59:05.548] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> do we have a nether portal
[15Jul2024 21:59:06.447] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> lino i'm stealing a bow
[15Jul2024 21:59:07.818] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> lol
[15Jul2024 21:59:08.821] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> yeah may
[15Jul2024 21:59:09.915] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3241ms or 64 ticks behind
[15Jul2024 21:59:11.125] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> go for it
[15Jul2024 21:59:11.362] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> jay*
[15Jul2024 21:59:14.639] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> I have a nether portal at my place
[15Jul2024 21:59:18.884] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> xaero-waypoint:Shared Location:S:-229:~:178:6:false:0:Internal-overworld-waypoints
[15Jul2024 21:59:20.210] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> nether here
[15Jul2024 21:59:26.361] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> dogs
[15Jul2024 21:59:27.440] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2566ms or 51 ticks behind
[15Jul2024 21:59:32.507] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> are we hunting down the portal or no
[15Jul2024 21:59:37.769] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> let's do this
[15Jul2024 21:59:38.309] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yea
[15Jul2024 21:59:39.337] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> got pearls?
[15Jul2024 21:59:40.965] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> alright!
[15Jul2024 21:59:43.483] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I got a bunch
[15Jul2024 21:59:44.965] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2542ms or 50 ticks behind
[15Jul2024 21:59:46.329] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> it's this way
[15Jul2024 21:59:47.459] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> the dogs noises echo and it's funny
[15Jul2024 22:00:06.046] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6122ms or 122 ticks behind
[15Jul2024 22:00:09.146] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay two are on track
[15Jul2024 22:00:10.276] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> lock in
[15Jul2024 22:00:24.974] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3950ms or 79 ticks behind
[15Jul2024 22:00:26.173] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> who are we missing
[15Jul2024 22:00:27.952] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> daksh?
[15Jul2024 22:00:29.330] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> daksh
[15Jul2024 22:00:30.239] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> where
[15Jul2024 22:00:34.246] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> and jay
[15Jul2024 22:00:37.026] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> and jay
[15Jul2024 22:00:40.433] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> guys lock in
[15Jul2024 22:00:43.039] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3065ms or 61 ticks behind
[15Jul2024 22:00:47.568] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> vc time?
[15Jul2024 22:00:54.737] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> down
[15Jul2024 22:00:55.090] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> gotta have the epic background music
[15Jul2024 22:01:03.937] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 5913ms or 118 ticks behind
[15Jul2024 22:01:14.377] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> hi
[15Jul2024 22:01:20.785] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> cant talk since its late
[15Jul2024 22:01:21.237] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2313ms or 46 ticks behind
[15Jul2024 22:01:28.816] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> cant talk rip
[15Jul2024 22:01:30.537] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> rip
[15Jul2024 22:01:36.876] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> put me in chief
[15Jul2024 22:01:36.877] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> i can hear u kevin
[15Jul2024 22:01:38.298] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2075ms or 41 ticks behind
[15Jul2024 22:02:12.178] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> pull us into gaming nerds
[15Jul2024 22:02:13.197] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! -1659.799090681227,-64.92159999847412,1475.271648423654
[15Jul2024 22:02:13.577] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2103ms or 42 ticks behind
[15Jul2024 22:02:35.119] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> or get out of gaming
[15Jul2024 22:02:44.387] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2013ms or 40 ticks behind
[15Jul2024 22:02:52.316] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> oh right I forgot I put a limit on taht
[15Jul2024 22:02:54.785] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> disabled it
[15Jul2024 22:03:07.120] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> how many cows are in this 2 by 1 area
[15Jul2024 22:03:11.758] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> mb
[15Jul2024 22:03:12.425] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> it's a farm
[15Jul2024 22:03:15.611] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2037ms or 40 ticks behind
[15Jul2024 22:03:16.342] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> nvm 1x1
[15Jul2024 22:03:17.365] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> it's an entity cramming farm
[15Jul2024 22:03:21.129] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> compressed cow
[15Jul2024 22:03:32.103] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> pls no kill I spent months getting this stuff here
[15Jul2024 22:03:44.988] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2015ms or 40 ticks behind
[15Jul2024 22:04:02.433] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2459ms or 49 ticks behind
[15Jul2024 22:04:03.138] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> jay the end has pearles
[15Jul2024 22:04:09.272] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> wait lino u made ignitium chestplate
[15Jul2024 22:04:12.622] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah
[15Jul2024 22:04:13.853] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> w
[15Jul2024 22:04:20.239] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2015ms or 40 ticks behind
[15Jul2024 22:04:20.616] [User Authenticator #35/INFO] [net.minecraft.server.network.ServerLoginPacketListenerImpl/]: UUID of player stellarumsalve is 78cca7c2-7bce-4c45-b786-3880d464352a
[15Jul2024 22:04:23.705] [Server thread/INFO] [net.minecraft.server.players.PlayerList/]: stellarumsalve[/135.180.17.41:33554] logged in with entity id 1180495 at (-205.4020767450674, 63.0, 246.0532808611746)
[15Jul2024 22:04:23.707] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending ToolHandleTypeManager to stellarumsalve
[15Jul2024 22:04:23.707] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending SnowcapOvenFreezingManager to stellarumsalve
[15Jul2024 22:04:23.708] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending HorizoniteForgeFuelManager to stellarumsalve
[15Jul2024 22:04:23.708] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending AlchemyRecipeManager to stellarumsalve
[15Jul2024 22:04:23.708] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalEntryManager to stellarumsalve
[15Jul2024 22:04:23.709] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalSectionManager to stellarumsalve
[15Jul2024 22:04:23.709] [Server thread/INFO] [ModdingLegacy/blue_skies/]: Sending JournalRequirementManager to stellarumsalve
[15Jul2024 22:04:23.732] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve joined the game
[15Jul2024 22:04:23.769] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 78cca7c2-7bce-4c45-b786-3880d464352a
[15Jul2024 22:04:23.772] [Server thread/INFO] [Jade/]: Syncing config to stellarumsalve (78cca7c2-7bce-4c45-b786-3880d464352a)
[15Jul2024 22:04:25.212] [Server thread/INFO] [ping-wheel/]: [Ping-Wheel] Channel update: stellarumsalve -> Global
[15Jul2024 22:04:25.212] [Server thread/INFO] [org.betterx.worlds.together.util.Logger/]: [bclib] Auto-Sync was disabled on the server.
[15Jul2024 22:04:33.455] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> xaero-waypoint:Shared Location:S:-364:95:217:12:false:0:Internal-overworld-waypoints
[15Jul2024 22:04:38.347] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3123ms or 62 ticks behind
[15Jul2024 22:04:47.707] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> blood?
[15Jul2024 22:04:56.180] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2856ms or 57 ticks behind
[15Jul2024 22:05:14.558] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3384ms or 67 ticks behind
[15Jul2024 22:05:32.498] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2974ms or 59 ticks behind
[15Jul2024 22:05:49.945] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2471ms or 49 ticks behind
[15Jul2024 22:06:07.296] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2372ms or 47 ticks behind
[15Jul2024 22:06:09.721] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> xaero-waypoint:Shared Location:S:-610:109:460:13:false:0:Internal-overworld-waypoints
[15Jul2024 22:06:09.835] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> -613, 464
[15Jul2024 22:06:10.644] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> xaero-waypoint:Shared Location:S:-613:109:460:12:false:0:Internal-overworld-waypoints
[15Jul2024 22:06:15.988] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> heading west
[15Jul2024 22:06:24.185] [Server thread/INFO] [liecounter/]: Prsid: /lie sync 45b2f6b2-658b-4c62-9fee-f5d1c770f163 278191353261981696
[15Jul2024 22:06:24.567] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Synced lies of Sh4d0wb0Y to 278191353261981696. Congratulations!
[15Jul2024 22:06:25.309] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3035ms or 60 ticks behind
[15Jul2024 22:06:28.823] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> you have been synced
[15Jul2024 22:06:31.769] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> please do not resist
[15Jul2024 22:06:32.557] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> I see a tower
[15Jul2024 22:06:36.680] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> I am entering the tower
[15Jul2024 22:06:42.371] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> I dont care
[15Jul2024 22:06:42.371] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2098ms or 41 ticks behind
[15Jul2024 22:06:50.723] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I'll kill you in 3 seconds
[15Jul2024 22:06:54.589] [Server thread/INFO] [liecounter/]: Prsid: /lie add ioBdaSylemertxE
[15Jul2024 22:06:54.728] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has lied 162 times.
[15Jul2024 22:06:54.786] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> I have a mic now
[15Jul2024 22:06:58.573] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> cant talk tho since its late
[15Jul2024 22:06:59.497] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Kinetikid> threatening lino arc
[15Jul2024 22:06:59.693] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2369ms or 47 ticks behind
[15Jul2024 22:07:02.631] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> based
[15Jul2024 22:07:04.217] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> no I missed my shot]
[15Jul2024 22:07:08.064] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> it's an aimbot bow
[15Jul2024 22:07:22.877] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2003ms or 40 ticks behind
[15Jul2024 22:07:47.601] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> the firefly is my best friend, do you not have a best friend firefly????
[15Jul2024 22:07:50.278] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2004ms or 40 ticks behind
[15Jul2024 22:08:05.541] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> lets wait for daksh
[15Jul2024 22:08:06.427] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> ye
[15Jul2024 22:08:15.368] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2044ms or 40 ticks behind
[15Jul2024 22:08:28.319] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> is that the one from the funny dimension
[15Jul2024 22:08:32.677] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2003ms or 40 ticks behind
[15Jul2024 22:08:55.479] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2005ms or 40 ticks behind
[15Jul2024 22:09:06.532] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> jay that isnt legal
[15Jul2024 22:09:16.307] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX has made the advancement [Take Aim]
[15Jul2024 22:09:19.983] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2059ms or 41 ticks behind
[15Jul2024 22:09:35.677] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> xaero-waypoint:Shared Location:S:-1025:115:644:2:false:0:Internal-overworld-waypoints
[15Jul2024 22:09:37.044] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2071ms or 41 ticks behind
[15Jul2024 22:09:55.927] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2054ms or 41 ticks behind
[15Jul2024 22:10:08.645] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Stone Age]
[15Jul2024 22:10:22.430] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2006ms or 40 ticks behind
[15Jul2024 22:10:43.677] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2053ms or 41 ticks behind
[15Jul2024 22:11:16.876] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2002ms or 40 ticks behind
[15Jul2024 22:11:21.891] [Server thread/INFO] [liecounter/]: Prsid: /lie add ioBdaSylemertxE
[15Jul2024 22:11:22.217] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has lied 163 times.
[15Jul2024 22:11:31.792] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve was burnt to a crisp whilst fighting ioBdaSylemertxE
[15Jul2024 22:11:35.601] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved too quickly! 1088.7654938620658,-9.0,-402.88116404207597
[15Jul2024 22:11:39.693] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2019ms or 40 ticks behind
[15Jul2024 22:11:57.231] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2557ms or 51 ticks behind
[15Jul2024 22:12:05.175] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> ./lino kill count 1
[15Jul2024 22:12:14.479] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Kinetikid) moved wrongly! 0.26739299990822474
[15Jul2024 22:12:14.480] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Kinetikid) moved wrongly! 0.30304405041624705
[15Jul2024 22:12:14.480] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Boat (vehicle of Kinetikid) moved wrongly! 0.37118062761942383
[15Jul2024 22:12:15.670] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3447ms or 68 ticks behind
[15Jul2024 22:12:35.193] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4570ms or 91 ticks behind
[15Jul2024 22:12:54.423] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4249ms or 84 ticks behind
[15Jul2024 22:12:57.553] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> if we all converge does that mean we are cauchy
[15Jul2024 22:13:13.971] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4597ms or 91 ticks behind
[15Jul2024 22:13:32.762] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3838ms or 76 ticks behind
[15Jul2024 22:13:39.663] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> its under water
[15Jul2024 22:13:41.689] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> the cauchy sequence is just pythagorean theorem
[15Jul2024 22:13:42.833] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> suffer
[15Jul2024 22:13:51.032] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3308ms or 66 ticks behind
[15Jul2024 22:14:08.610] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Eye Spy]
[15Jul2024 22:14:09.584] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3560ms or 71 ticks behind
[15Jul2024 22:14:15.216] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> minors and minecraft
[15Jul2024 22:14:18.621] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> who here is a youtuber
[15Jul2024 22:14:19.974] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has made the advancement [Quite the Renovation]
[15Jul2024 22:14:24.650] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Quite the Renovation]
[15Jul2024 22:14:26.574] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Monster Hunter]
[15Jul2024 22:14:28.666] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4093ms or 81 ticks behind
[15Jul2024 22:14:37.394] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Crops of the Wild]
[15Jul2024 22:14:42.922] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX has made the advancement [Quite the Renovation]
[15Jul2024 22:14:46.843] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3219ms or 64 ticks behind
[15Jul2024 22:14:49.558] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has made the advancement [Eye Spy]
[15Jul2024 22:14:49.596] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo has made the advancement [Eye Spy]
[15Jul2024 22:15:02.562] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> xaero-waypoint:Shared Location:S:-1612:-17:508:12:false:0:Internal-overworld-waypoints
[15Jul2024 22:15:02.733] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> woah
[15Jul2024 22:15:04.401] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2577ms or 51 ticks behind
[15Jul2024 22:15:21.963] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2589ms or 51 ticks behind
[15Jul2024 22:15:39.926] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3003ms or 60 ticks behind
[15Jul2024 22:15:45.227] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> where is everyone
[15Jul2024 22:15:49.605] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Eye Spy]
[15Jul2024 22:15:58.203] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3279ms or 65 ticks behind
[15Jul2024 22:16:16.905] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3731ms or 74 ticks behind
[15Jul2024 22:16:22.944] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> xaero-waypoint:Shared Location:S:-1658:-23:555:9:false:0:Internal-overworld-waypoints
[15Jul2024 22:16:25.881] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> portal
[15Jul2024 22:16:36.482] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> y coord?
[15Jul2024 22:16:38.057] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6183ms or 123 ticks behind
[15Jul2024 22:16:40.501] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> -23
[15Jul2024 22:16:40.739] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> -24
[15Jul2024 22:16:42.550] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX has made the advancement [Eye Spy]
[15Jul2024 22:16:47.218] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y has made the advancement [Eye Spy]
[15Jul2024 22:16:51.626] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> wait tomes??
[15Jul2024 22:16:56.291] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> thats rly good
[15Jul2024 22:16:57.971] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4947ms or 98 ticks behind
[15Jul2024 22:17:12.697] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> jay
[15Jul2024 22:17:14.016] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> I have 64
[15Jul2024 22:17:17.142] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4218ms or 84 ticks behind
[15Jul2024 22:17:30.246] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> jay i gotchu
[15Jul2024 22:17:35.513] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3389ms or 67 ticks behind
[15Jul2024 22:17:53.129] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2655ms or 53 ticks behind
[15Jul2024 22:18:01.784] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> return scrolls?
[15Jul2024 22:18:11.933] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2009ms or 40 ticks behind
[15Jul2024 22:18:19.216] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yeah but what if we fall into the void?
[15Jul2024 22:18:27.395] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> to save ourselves
[15Jul2024 22:18:30.140] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2016ms or 40 ticks behind
[15Jul2024 22:18:39.530] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> corpse mod still works in teh void
[15Jul2024 22:18:40.394] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> dw
[15Jul2024 22:18:45.151] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yep
[15Jul2024 22:18:46.960] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> o ok
[15Jul2024 22:18:47.277] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2153ms or 43 ticks behind
[15Jul2024 22:19:02.088] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has made the advancement [Quite the Renovation]
[15Jul2024 22:19:04.876] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2002ms or 40 ticks behind
[15Jul2024 22:19:07.176] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yeah were here jay
[15Jul2024 22:19:09.318] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yeah we're here
[15Jul2024 22:19:13.337] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has made the advancement [Eye Spy]
[15Jul2024 22:19:29.763] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> lino no
[15Jul2024 22:19:30.277] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2003ms or 40 ticks behind
[15Jul2024 22:19:46.568] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> aww man
[15Jul2024 22:19:47.604] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> lmfao
[15Jul2024 22:20:13.739] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> I dont care
[15Jul2024 22:20:13.876] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2002ms or 40 ticks behind
[15Jul2024 22:20:16.237] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yeah
[15Jul2024 22:20:47.275] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2001ms or 40 ticks behind
[15Jul2024 22:20:47.809] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> wheres the waystone
[15Jul2024 22:21:01.682] [Server thread/INFO] [liecounter/]: Prsid: /lie add ioBdaSylemertxE
[15Jul2024 22:21:02.028] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has lied 164 times.
[15Jul2024 22:21:07.033] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> maybe not a lie but certainly egregious
[15Jul2024 22:21:19.628] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2955ms or 59 ticks behind
[15Jul2024 22:21:26.280] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> anyone got coal on them
[15Jul2024 22:21:30.168] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> gonna smelt some backup armor
[15Jul2024 22:21:55.379] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2005ms or 40 ticks behind
[15Jul2024 22:22:23.919] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> lino could u vein mine that?
[15Jul2024 22:22:40.676] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> why do you need a bed tho
[15Jul2024 22:22:46.898] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> ah that can be funny
[15Jul2024 22:22:46.930] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Sweet Dreams]
[15Jul2024 22:22:57.707] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y has made the advancement [Sweet Dreams]
[15Jul2024 22:23:00.747] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> nahh
[15Jul2024 22:23:03.528] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> bet
[15Jul2024 22:23:16.939] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Face the Void]
[15Jul2024 22:23:16.940] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [The End?]
[15Jul2024 22:23:18.213] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has made the advancement [Face the Void]
[15Jul2024 22:23:18.213] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has made the advancement [The End?]
[15Jul2024 22:23:18.218] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Face the Void]
[15Jul2024 22:23:18.219] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [The End?]
[15Jul2024 22:23:18.224] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo has made the advancement [Face the Void]
[15Jul2024 22:23:18.224] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo has made the advancement [The End?]
[15Jul2024 22:23:18.228] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has made the advancement [Face the Void]
[15Jul2024 22:23:18.228] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has made the advancement [The End?]
[15Jul2024 22:23:18.233] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2009ms or 40 ticks behind
[15Jul2024 22:23:18.297] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1758.0641544142145,72.59260459763506,-557.9748645442015
[15Jul2024 22:23:18.316] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! 1757.9108936864443,72.46415937495544,-557.4968289431462
[15Jul2024 22:23:18.821] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: LocoDestroyo moved too quickly! 1758.1321432426544,72.46415937495544,-557.2348104024768
[15Jul2024 22:23:18.860] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved too quickly! 1758.0929313980528,72.46415937495544,-557.0647042111636
[15Jul2024 22:23:25.786] [Server thread/INFO] [betterendisland/]: Scanning for legacy world dragon fight...
[15Jul2024 22:23:25.788] [Server thread/INFO] [betterendisland/]: Found that the dragon has not yet been killed in this world.
[15Jul2024 22:23:26.219] [Server thread/INFO] [betterendisland/]: Portal location is null. Placing manually...
[15Jul2024 22:23:26.219] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 22:23:26.256] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y has made the advancement [Face the Void]
[15Jul2024 22:23:26.256] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y has made the advancement [The End?]
[15Jul2024 22:23:26.295] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: DragonDSX moved too quickly! 0.02499322673838833,1.5,9.891300675801858
[15Jul2024 22:23:27.124] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 1758.1102145384048,72.28341352782894,-558.1172092955657
[15Jul2024 22:23:28.998] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX has made the advancement [Face the Void]
[15Jul2024 22:23:28.998] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX has made the advancement [The End?]
[15Jul2024 22:23:29.000] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> lag
[15Jul2024 22:23:29.189] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: DragonDSX moved too quickly! 1758.0126842593427,72.46415937495544,-557.06010965329
[15Jul2024 22:23:44.441] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 11217ms or 224 ticks behind
[15Jul2024 22:23:49.268] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> this feels like something I would make in CSE 160
[15Jul2024 22:24:00.461] [Server thread/INFO] [betterendisland/]: Starting initial dragon fight!
[15Jul2024 22:24:00.461] [Server thread/INFO] [betterendisland/]: Found all crystals, starting initial dragon spawn.
[15Jul2024 22:24:07.684] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> we're cooked
[15Jul2024 22:24:09.106] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid fell from a high place
[15Jul2024 22:24:12.943] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1758.0753630203114,72.37870315946081,-557.428005101721
[15Jul2024 22:24:12.953] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1758.0753630203114,72.37870315946081,-557.428005101721
[15Jul2024 22:24:12.971] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1758.0753630203114,72.37870315946081,-557.428005101721
[15Jul2024 22:24:12.992] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1758.0753630203114,72.37870315946081,-557.428005101721
[15Jul2024 22:24:25.642] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2018ms or 40 ticks behind
[15Jul2024 22:24:32.536] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 22:24:32.558] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve blew up
[15Jul2024 22:24:46.232] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> my fault
[15Jul2024 22:24:47.670] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has made the advancement [Ice Bucket Challenge]
[15Jul2024 22:24:52.825] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2001ms or 40 ticks behind
[15Jul2024 22:24:59.479] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was slain by Enderman
[15Jul2024 22:25:02.902] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> oh crap I forgot to bring that
[15Jul2024 22:25:07.307] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1758.014948332503,72.37870315946081,-558.0142408182724
[15Jul2024 22:25:19.881] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX was killed by Ender Dragon using magic
[15Jul2024 22:25:30.863] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y has made the advancement [Take Aim]
[15Jul2024 22:25:37.923] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> I can bring 3 buckets
[15Jul2024 22:25:47.674] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> crap my coal is back on my body
[15Jul2024 22:27:12.873] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has reached the goal [You Need a Mint]
[15Jul2024 22:27:18.109] [Server thread/INFO] [com.lothrazar.storagenetwork.StorageNetworkMod/]: Chunk not loadedBlockPos{x=-215, y=68, z=303}
[15Jul2024 22:27:18.671] [Server thread/INFO] [com.lothrazar.storagenetwork.StorageNetworkMod/]: Chunk not loadedBlockPos{x=-215, y=68, z=303}
[15Jul2024 22:28:04.347] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> do u want my rocket launcher
[15Jul2024 22:28:10.287] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y was slain by Ender Dragon
[15Jul2024 22:29:08.466] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX was slain by Enderman
[15Jul2024 22:29:08.877] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo has made the advancement [Free the End]
[15Jul2024 22:29:13.483] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> lol
[15Jul2024 22:29:13.666] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was killed by Ender Dragon using magic
[15Jul2024 22:29:20.138] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 22:29:30.893] [Server thread/INFO] [com.lothrazar.storagenetwork.StorageNetworkMod/]: Chunk not loadedBlockPos{x=-215, y=68, z=303}
[15Jul2024 22:29:31.336] [Server thread/INFO] [com.lothrazar.storagenetwork.StorageNetworkMod/]: Chunk not loadedBlockPos{x=-215, y=68, z=303}
[15Jul2024 22:29:31.468] [Server thread/INFO] [com.lothrazar.storagenetwork.StorageNetworkMod/]: Chunk not loadedBlockPos{x=-215, y=68, z=303}
[15Jul2024 22:29:42.329] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was slain by Enderman
[15Jul2024 22:29:48.338] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has reached the goal [The Next Generation]
[15Jul2024 22:29:50.469] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=-7, y=65, z=-6} BlockPos{x=-6, y=64, z=-6}
[15Jul2024 22:30:02.066] [Server thread/INFO] [liecounter/]: stellarumsalve: /lie add ioBdaSylemertxE
[15Jul2024 22:30:02.475] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has lied 165 times.
[15Jul2024 22:30:54.078] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y was slain by Enderman
[15Jul2024 22:31:26.677] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> what if I just put a bucket of water down
[15Jul2024 22:31:34.946] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has made the advancement [Remote Getaway]
[15Jul2024 22:31:35.230] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2006ms or 40 ticks behind
[15Jul2024 22:31:37.091] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo has made the advancement [Remote Getaway]
[15Jul2024 22:31:42.694] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> what the
[15Jul2024 22:31:58.280] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX was slain by Enderman
[15Jul2024 22:32:04.674] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Remote Getaway]
[15Jul2024 22:32:06.069] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> this is so wack
[15Jul2024 22:32:16.541] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Remote Getaway]
[15Jul2024 22:32:29.086] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> AHHHH
[15Jul2024 22:32:31.265] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has made the advancement [Remote Getaway]
[15Jul2024 22:32:59.935] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> guys structure
[15Jul2024 22:33:01.067] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Take Aim]
[15Jul2024 22:33:12.077] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX was slain by Enderman
[15Jul2024 22:33:15.261] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y was slain by Enderman
[15Jul2024 22:33:15.429] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> need pearl
[15Jul2024 22:33:22.323] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! 6.705993334549442,-33.0,2.8752955932654913
[15Jul2024 22:34:16.135] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX has made the advancement [Remote Getaway]
[15Jul2024 22:34:25.533] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was shot by Propulk
[15Jul2024 22:34:26.973] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! -1672.3764795466557,-122.20491395601599,1714.4184087681558
[15Jul2024 22:34:27.886] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> how am I supposed to get down
[15Jul2024 22:34:31.665] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> jump
[15Jul2024 22:34:34.366] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> trust
[15Jul2024 22:34:50.465] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid fell from a high place
[15Jul2024 22:35:20.068] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> is that tnt
[15Jul2024 22:35:20.074] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has completed the challenge [Great View From Up Here]
[15Jul2024 22:35:23.293] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! 1.0899931198005248,-28.0,-0.5961878986474858
[15Jul2024 22:35:23.300] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! 1.0899931198005248,-28.0,-0.5961878986474858
[15Jul2024 22:35:23.311] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! 1.0899931198005248,-28.0,-0.5961878986474858
[15Jul2024 22:35:42.835] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! 0.37346452239058436,-39.0,-0.7840133353670353
[15Jul2024 22:36:03.734] [Server thread/INFO] [com.lothrazar.storagenetwork.StorageNetworkMod/]: Chunk not loadedBlockPos{x=-215, y=68, z=303}
[15Jul2024 22:36:12.366] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! -0.8723013994313575,-44.0,-1.9752322787271623
[15Jul2024 22:36:15.668] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> is that shulker flying
[15Jul2024 22:36:16.757] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> tf
[15Jul2024 22:36:24.744] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved too quickly! 8.557520755885108,-165.0667634586353,102.05389536742337
[15Jul2024 22:36:24.749] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 3.340430680267932,-35.0,-0.6160558480708005
[15Jul2024 22:36:24.750] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved too quickly! 8.557520755885108,-165.0667634586353,102.05389536742337
[15Jul2024 22:36:24.756] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved too quickly! 8.557520755885108,-165.0667634586353,102.05389536742337
[15Jul2024 22:36:24.762] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 3.340430680267932,-35.0,-0.6160558480708005
[15Jul2024 22:36:24.764] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved too quickly! 8.557520755885108,-165.0667634586353,102.05389536742337
[15Jul2024 22:36:24.770] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved too quickly! 8.557520755885108,-165.0667634586353,102.05389536742337
[15Jul2024 22:36:43.510] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve fell from a high place
[15Jul2024 22:36:53.009] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2035ms or 40 ticks behind
[15Jul2024 22:36:59.610] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! -3.405147149341216,-18.0,-0.8218283509768298
[15Jul2024 22:37:03.011] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yo
[15Jul2024 22:37:11.510] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> question
[15Jul2024 22:37:13.043] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 5069ms or 101 ticks behind
[15Jul2024 22:37:13.628] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! -0.10711712780035576,-61.0,-6.882239082301567
[15Jul2024 22:37:14.368] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yeah
[15Jul2024 22:37:15.019] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> how do we get back
[15Jul2024 22:37:19.304] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> portal
[15Jul2024 22:37:24.200] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> oh right
[15Jul2024 22:37:31.084] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3060ms or 61 ticks behind
[15Jul2024 22:37:49.914] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> YOOO
[15Jul2024 22:37:54.760] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yeah
[15Jul2024 22:37:55.194] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=106, y=60, z=-1796} BlockPos{x=106, y=58, z=-1797}
[15Jul2024 22:37:56.217] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 7.300204294425553,-25.0,7.672249880045001
[15Jul2024 22:37:56.570] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> wait no
[15Jul2024 22:38:06.768] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> nah they look weirder
[15Jul2024 22:38:12.586] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 2.670028794228113,-13.0,0.9315045908676893
[15Jul2024 22:38:16.769] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 2.4355744596341555,-20.0,-5.202969920959504
[15Jul2024 22:38:19.547] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y was shot by Propulk
[15Jul2024 22:38:29.733] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2059ms or 41 ticks behind
[15Jul2024 22:38:37.418] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> rahul tell them,
[15Jul2024 22:38:42.939] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> :)
[15Jul2024 22:38:46.975] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2251ms or 45 ticks behind
[15Jul2024 22:38:48.491] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> tf is that
[15Jul2024 22:39:04.046] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Thallasium Tooling]
[15Jul2024 22:39:05.119] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> i dont have any
[15Jul2024 22:39:23.693] [Server thread/WARN] [net.minecraft.server.level.ServerPlayerGameMode/]: Mismatch in destroy block pos: BlockPos{x=223, y=76, z=-1959} BlockPos{x=223, y=75, z=-1957}
[15Jul2024 22:39:31.183] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> wait
[15Jul2024 22:39:38.626] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> thats the ender guardians thing
[15Jul2024 22:39:46.818] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> cataclysm mod
[15Jul2024 22:39:47.643] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y fell from a high place
[15Jul2024 22:39:56.190] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2017ms or 40 ticks behind
[15Jul2024 22:40:03.216] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> boss
[15Jul2024 22:40:16.363] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 5189ms or 103 ticks behind
[15Jul2024 22:40:24.075] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> where is everyone
[15Jul2024 22:40:35.745] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> me and natalie r north
[15Jul2024 22:40:36.991] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 5667ms or 113 ticks behind
[15Jul2024 22:40:57.676] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 5702ms or 114 ticks behind
[15Jul2024 22:41:04.867] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid was doomed to fall by Propulk
[15Jul2024 22:41:19.080] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6406ms or 128 ticks behind
[15Jul2024 22:41:40.524] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6450ms or 129 ticks behind
[15Jul2024 22:41:57.488] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid fell from a high place
[15Jul2024 22:41:58.620] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! -1698.8552322305388,-90.0,1592.984845186187
[15Jul2024 22:42:03.083] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 7559ms or 151 ticks behind
[15Jul2024 22:42:25.000] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6927ms or 138 ticks behind
[15Jul2024 22:42:32.442] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX was slain by Enderman
[15Jul2024 22:42:35.381] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> wat
[15Jul2024 22:42:37.350] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <stellarumsalve> waystone
[15Jul2024 22:42:39.957] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> nope
[15Jul2024 22:42:41.972] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <stellarumsalve> damn
[15Jul2024 22:42:42.844] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2870ms or 57 ticks behind
[15Jul2024 22:42:44.570] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> i have return scroll
[15Jul2024 22:42:46.883] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <stellarumsalve> same
[15Jul2024 22:43:02.477] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4653ms or 93 ticks behind
[15Jul2024 22:43:05.323] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> getting an error when I try to tp to waystone
[15Jul2024 22:43:09.322] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid fell from a high place
[15Jul2024 22:43:15.992] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> wats the error
[15Jul2024 22:43:20.605] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3132ms or 62 ticks behind
[15Jul2024 22:43:21.057] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y has made the advancement [Remote Getaway]
[15Jul2024 22:43:21.058] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> unknown command
[15Jul2024 22:43:25.139] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> avoid shadow walkers pls :pray:
[15Jul2024 22:43:43.688] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> I cant get back to my stuff
[15Jul2024 22:43:43.916] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 8342ms or 166 ticks behind
[15Jul2024 22:43:45.185] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> cant tp
[15Jul2024 22:43:47.465] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y fell from a high place
[15Jul2024 22:44:03.198] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 1758.0276257664013,72.46415937495544,-557.2702156465782
[15Jul2024 22:44:03.235] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 1758.0276257664013,72.46415937495544,-557.2702156465782
[15Jul2024 22:44:05.922] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> shadow walkers
[15Jul2024 22:44:05.924] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 7050ms or 141 ticks behind
[15Jul2024 22:44:27.638] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6715ms or 134 ticks behind
[15Jul2024 22:44:40.219] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> wait
[15Jul2024 22:44:49.921] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 7298ms or 145 ticks behind
[15Jul2024 22:44:51.938] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: DragonDSX moved too quickly! 1757.9441302565926,72.46415937495544,-557.3774573767548
[15Jul2024 22:45:05.932] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> bruh i heard a virus
[15Jul2024 22:45:11.246] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6372ms or 127 ticks behind
[15Jul2024 22:45:13.856] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> idk
[15Jul2024 22:45:13.878] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Weird Fishes/Arpeggi]
[15Jul2024 22:45:14.036] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> you mean the enderiophage?
[15Jul2024 22:45:16.881] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yeah
[15Jul2024 22:45:26.555] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yeah
[15Jul2024 22:45:34.116] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! -4.1593002772560475,-18.0,4.861383885235
[15Jul2024 22:45:34.123] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! -4.1593002772560475,-18.0,4.861383885235
[15Jul2024 22:45:39.874] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> no
[15Jul2024 22:45:56.070] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! -4.617284585086283,-14.0,-7.9168003589313685
[15Jul2024 22:46:11.117] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! -6.401293055545205,-30.0,6.763668196094841
[15Jul2024 22:46:20.474] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo has made the advancement [Weird Fishes/Arpeggi]
[15Jul2024 22:46:21.875] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! -3.02484961235737,-15.0,1.8485018801936803
[15Jul2024 22:46:26.923] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 6.382877753474759,-19.0,0.9038884705228156
[15Jul2024 22:46:45.741] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! -1.7599454540607908,-14.0,-0.14666552674839295
[15Jul2024 22:46:46.534] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y was slain by Enderman
[15Jul2024 22:46:54.278] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2054ms or 41 ticks behind
[15Jul2024 22:47:15.957] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> its an end ship
[15Jul2024 22:47:16.089] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6815ms or 136 ticks behind
[15Jul2024 22:47:34.400] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3327ms or 66 ticks behind
[15Jul2024 22:47:36.630] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has made the advancement [The City at the End of the Game]
[15Jul2024 22:47:54.695] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 5321ms or 106 ticks behind
[15Jul2024 22:48:01.543] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has made the advancement [The City at the End of the Game]
[15Jul2024 22:48:03.516] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! 4.707592407114049,-42.0,-5.4462464685718714
[15Jul2024 22:48:13.448] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3774ms or 75 ticks behind
[15Jul2024 22:48:16.320] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo has made the advancement [The City at the End of the Game]
[15Jul2024 22:48:19.075] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has reached the goal [Sky's the Limit]
[15Jul2024 22:48:30.514] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y was doomed to fall by Enderman
[15Jul2024 22:48:36.235] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX fell from a high place
[15Jul2024 22:48:38.425] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2002ms or 40 ticks behind
[15Jul2024 22:48:59.053] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 5629ms or 112 ticks behind
[15Jul2024 22:49:20.691] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6667ms or 133 ticks behind
[15Jul2024 22:49:22.239] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! 7.282931341039273,-23.0,5.4905672736495035
[15Jul2024 22:49:27.842] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved too quickly! 1.5493143415242798,-11.0,-5.859480250629531
[15Jul2024 22:49:29.576] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX has made the advancement [Ender Distancing]
[15Jul2024 22:49:34.673] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Ender Distancing]
[15Jul2024 22:49:37.153] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX has made the advancement [Capsid-19]
[15Jul2024 22:49:40.738] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Capsid-19]
[15Jul2024 22:50:15.799] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> xaero-waypoint:Shared Location:S:-127:~:-2315:13:false:0:Internal-the-end-waypoints
[15Jul2024 22:50:27.360] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was doomed to fall by Phantom
[15Jul2024 22:50:34.899] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2025ms or 40 ticks behind
[15Jul2024 22:50:55.322] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 5449ms or 108 ticks behind
[15Jul2024 22:51:19.395] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y fell from a high place
[15Jul2024 22:51:26.902] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2028ms or 40 ticks behind
[15Jul2024 22:51:33.247] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Weird Fishes/Arpeggi]
[15Jul2024 22:51:43.072] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has made the advancement [Ender Distancing]
[15Jul2024 22:51:48.174] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6300ms or 126 ticks behind
[15Jul2024 22:51:52.092] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has made the advancement [Race Against The Clock]
[15Jul2024 22:51:59.512] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> helpo
[15Jul2024 22:52:10.292] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has reached the goal [On Eternal Paths]
[15Jul2024 22:52:22.452] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> these slimes are broekn
[15Jul2024 22:52:23.279] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has reached the goal [On Eternal Paths]
[15Jul2024 22:53:06.245] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y was slain by Enderman
[15Jul2024 22:53:10.031] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 1758.199999988079,72.46415937495544,-557.2855252475506
[15Jul2024 22:53:10.064] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 1758.199999988079,72.46415937495544,-557.2855252475506
[15Jul2024 22:53:12.582] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2008ms or 40 ticks behind
[15Jul2024 22:53:18.449] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> not yet
[15Jul2024 22:53:31.955] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> i shall join u
[15Jul2024 22:53:34.972] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 7398ms or 147 ticks behind
[15Jul2024 22:53:47.976] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yea hold on where r u
[15Jul2024 22:53:57.624] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [The City at the End of the Game]
[15Jul2024 22:54:14.602] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> xaero-waypoint:gui.xaero-deathpoint:D:-132:64:-2312:0:false:0:Internal-the-end-waypoints
[15Jul2024 22:54:30.256] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> i see the body
[15Jul2024 22:54:31.174] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has made the advancement [Hunt and Gather]
[15Jul2024 22:54:56.440] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX fell victim to the corruption.
[15Jul2024 22:55:02.885] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> ??
[15Jul2024 22:55:04.769] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2046ms or 40 ticks behind
[15Jul2024 22:55:07.571] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> bro died of covid
[15Jul2024 22:55:22.855] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 0.6634455876466969,-18.0,6.421197832141843
[15Jul2024 22:55:23.277] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> dont go near the crystals
[15Jul2024 22:55:24.192] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4469ms or 89 ticks behind
[15Jul2024 22:55:25.463] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 4.888704450110318,-8.0,-5.020570968891889
[15Jul2024 22:55:27.289] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX was slain by Enderman
[15Jul2024 22:55:31.116] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! -3.8875168573078334,-13.0,-5.951948734069447
[15Jul2024 22:55:31.245] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> they freeze u
[15Jul2024 22:55:36.172] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y was slain by Enderman
[15Jul2024 22:55:37.872] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> imma hop off
[15Jul2024 22:55:38.422] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> o
[15Jul2024 22:55:40.821] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 1758.1647957485627,72.46415937495544,-557.3718675601681
[15Jul2024 22:55:41.524] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <DragonDSX> oo hard to reach my body rn
[15Jul2024 22:55:42.492] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> bye daksh
[15Jul2024 22:55:43.622] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4448ms or 88 ticks behind
[15Jul2024 22:55:51.231] [Server thread/INFO] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: DragonDSX lost connection: Disconnected
[15Jul2024 22:55:51.231] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: DragonDSX left the game
[15Jul2024 22:55:51.231] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 091fe9d0-8597-487a-9184-0b1be889db9d
[15Jul2024 22:56:04.568] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 5995ms or 119 ticks behind
[15Jul2024 22:56:20.612] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was doomed to fall by Enderiophage
[15Jul2024 22:56:27.835] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> yo
[15Jul2024 22:56:29.379] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2055ms or 41 ticks behind
[15Jul2024 22:56:49.207] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4833ms or 96 ticks behind
[15Jul2024 22:56:50.114] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> rahul where is the stuff
[15Jul2024 22:56:51.327] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> if enderpearls go to the void they dont tp u
[15Jul2024 22:57:02.994] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> what stuff
[15Jul2024 22:57:09.040] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4866ms or 97 ticks behind
[15Jul2024 22:57:28.054] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> lino what stuff?
[15Jul2024 22:57:29.545] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 5522ms or 110 ticks behind
[15Jul2024 22:57:48.311] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3787ms or 75 ticks behind
[15Jul2024 22:58:27.517] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y fell from a high place
[15Jul2024 22:58:38.098] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2025ms or 40 ticks behind
[15Jul2024 22:58:50.691] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> does anyone have a waystone?
[15Jul2024 22:58:56.779] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3706ms or 74 ticks behind
[15Jul2024 22:58:59.030] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> they dont work
[15Jul2024 22:59:19.669] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! -0.14545285313274547,-10.287592896255163,0.4348444925783497
[15Jul2024 22:59:24.265] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> imma head back
[15Jul2024 22:59:41.717] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> imma hop off after i get back
[15Jul2024 22:59:49.416] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2242ms or 44 ticks behind
[15Jul2024 23:00:08.386] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <LocoDestroyo> aight gn guys
[15Jul2024 23:00:11.616] [Server thread/INFO] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: LocoDestroyo lost connection: Disconnected
[15Jul2024 23:00:11.616] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: LocoDestroyo left the game
[15Jul2024 23:00:11.616] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 83bc8166-9ac9-43f4-9570-1f9ed0214a8a
[15Jul2024 23:00:12.691] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 8317ms or 166 ticks behind
[15Jul2024 23:00:13.990] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> gn
[15Jul2024 23:00:30.993] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3319ms or 66 ticks behind
[15Jul2024 23:00:56.474] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 10500ms or 210 ticks behind
[15Jul2024 23:01:03.604] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 1.0560427747762446,-19.0,-0.6807990784218418
[15Jul2024 23:01:15.229] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y fell from a high place
[15Jul2024 23:01:16.152] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4678ms or 93 ticks behind
[15Jul2024 23:01:23.266] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> jay do you need help
[15Jul2024 23:01:28.164] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> not anymore
[15Jul2024 23:01:35.019] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3895ms or 77 ticks behind
[15Jul2024 23:01:38.922] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Sh4d0wb0Y> i was in a bit of a tricky situation
[15Jul2024 23:01:52.936] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2962ms or 59 ticks behind
[15Jul2024 23:02:11.077] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3153ms or 63 ticks behind
[15Jul2024 23:02:35.766] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 9692ms or 193 ticks behind
[15Jul2024 23:02:53.181] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2457ms or 49 ticks behind
[15Jul2024 23:03:10.660] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2487ms or 49 ticks behind
[15Jul2024 23:03:27.825] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2201ms or 44 ticks behind
[15Jul2024 23:03:40.222] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y has reached the goal [On Eternal Paths]
[15Jul2024 23:03:45.666] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2842ms or 56 ticks behind
[15Jul2024 23:04:03.227] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2603ms or 52 ticks behind
[15Jul2024 23:04:21.115] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2891ms or 57 ticks behind
[15Jul2024 23:04:24.624] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I have 45k onions...
[15Jul2024 23:04:26.398] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I may have
[15Jul2024 23:04:27.619] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> onions op
[15Jul2024 23:04:29.022] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> made a mistak
[15Jul2024 23:04:29.332] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y moved too quickly! 7.562135845576307,-11.0,0.45056667825656405
[15Jul2024 23:04:39.257] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3183ms or 63 ticks behind
[15Jul2024 23:04:42.891] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y fell out of the world
[15Jul2024 23:04:46.078] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> rip
[15Jul2024 23:04:47.691] [Server thread/INFO] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Sh4d0wb0Y lost connection: Disconnected
[15Jul2024 23:04:47.691] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Sh4d0wb0Y left the game
[15Jul2024 23:04:47.691] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 45b2f6b2-658b-4c62-9fee-f5d1c770f163
[15Jul2024 23:04:57.492] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3269ms or 65 ticks behind
[15Jul2024 23:05:14.878] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2404ms or 48 ticks behind
[15Jul2024 23:05:36.680] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2006ms or 40 ticks behind
[15Jul2024 23:05:53.745] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2071ms or 41 ticks behind
[15Jul2024 23:06:26.326] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2002ms or 40 ticks behind
[15Jul2024 23:06:37.122] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> *the main copy
[15Jul2024 23:06:55.056] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> ....
[15Jul2024 23:06:57.739] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2015ms or 40 ticks behind
[15Jul2024 23:07:07.871] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> the master/slave terminology is strictly forbidden in this server
[15Jul2024 23:07:10.880] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> WAIT
[15Jul2024 23:07:13.560] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> it's not master/slave
[15Jul2024 23:07:15.388] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> it's a minecraft serer
[15Jul2024 23:07:15.537] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2013ms or 40 ticks behind
[15Jul2024 23:07:19.686] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> master/inferior
[15Jul2024 23:07:29.810] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> main/branch
[15Jul2024 23:07:32.886] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2362ms or 47 ticks behind
[15Jul2024 23:07:36.740] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Acquire Hardware]
[15Jul2024 23:07:39.910] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I understand, main/branch
[15Jul2024 23:07:50.674] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2800ms or 56 ticks behind
[15Jul2024 23:08:08.336] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2662ms or 53 ticks behind
[15Jul2024 23:08:19.146] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> ./play double life from despicable me 4
[15Jul2024 23:08:26.589] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3265ms or 65 ticks behind
[15Jul2024 23:08:34.682] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> pw's roast against drake but also a banger
[15Jul2024 23:08:43.383] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> pharell
[15Jul2024 23:08:43.544] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> there's a roast against drake in despicable me?
[15Jul2024 23:08:44.971] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3398ms or 67 ticks behind
[15Jul2024 23:08:49.801] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> weird ass crossofer
[15Jul2024 23:08:50.000] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yep
[15Jul2024 23:08:58.060] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> a what
[15Jul2024 23:09:05.024] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 5100ms or 102 ticks behind
[15Jul2024 23:09:09.298] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved too quickly! 1757.800000011921,72.46415937495544,-557.1995851651997
[15Jul2024 23:09:24.917] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4893ms or 97 ticks behind
[15Jul2024 23:09:46.378] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6505ms or 130 ticks behind
[15Jul2024 23:10:38.656] [Server thread/INFO] [betterendisland/]: Found all crystals, respawning dragon.
[15Jul2024 23:11:08.832] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has reached the goal [The End... Again...]
[15Jul2024 23:11:08.833] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has reached the goal [The End... Again...]
[15Jul2024 23:11:08.833] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has reached the goal [The End... Again...]
[15Jul2024 23:11:08.833] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has reached the goal [The End... Again...]
[15Jul2024 23:11:08.833] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:11:08.847] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:11:08.855] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid blew up
[15Jul2024 23:11:10.193] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> is he in yet
[15Jul2024 23:11:59.010] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> bro shuddered out loud
[15Jul2024 23:12:19.837] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> natalie
[15Jul2024 23:12:21.371] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> frick you
[15Jul2024 23:12:25.863] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> almost killed me
[15Jul2024 23:12:30.863] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> oh wait prism did
[15Jul2024 23:12:31.464] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> mb
[15Jul2024 23:12:46.986] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yep
[15Jul2024 23:12:54.988] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> aimbot bow time
[15Jul2024 23:12:55.915] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> duck
[15Jul2024 23:13:20.694] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> why do they call you that kevin
[15Jul2024 23:13:24.487] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was slain by Ender Dragon
[15Jul2024 23:13:25.539] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> perhaps... in high school?
[15Jul2024 23:13:26.593] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid was doomed to fall by Ender Dragon
[15Jul2024 23:13:33.003] [Server thread/INFO] [liecounter/]: Prsid: /lie add Kinetikid
[15Jul2024 23:13:33.336] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has lied 14 times.
[15Jul2024 23:13:58.419] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> nmarks
[15Jul2024 23:14:00.712] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> you are so lucky
[15Jul2024 23:14:20.786] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> on the roof
[15Jul2024 23:14:51.420] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> y'all gotta get valkeryie armor
[15Jul2024 23:14:58.434] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid hit the ground too hard whilst trying to escape Ender Dragon
[15Jul2024 23:15:00.829] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! -1681.1558936757415,-88.0,506.5839652872165
[15Jul2024 23:15:01.150] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> kill 100 valkery bosses
[15Jul2024 23:15:14.056] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> english is not my first language
[15Jul2024 23:15:20.243] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> fr*nch
[15Jul2024 23:16:14.237] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has made the advancement [Free the End]
[15Jul2024 23:16:17.408] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> bro...
[15Jul2024 23:16:18.947] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I had that one
[15Jul2024 23:16:23.039] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> team effort
[15Jul2024 23:16:26.881] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:16:35.459] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I got 1
[15Jul2024 23:16:50.799] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> meee
[15Jul2024 23:17:13.843] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has reached the goal [Sky's the Limit]
[15Jul2024 23:17:39.321] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> ran out of glass
[15Jul2024 23:17:47.978] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> looking pretty
[15Jul2024 23:17:53.651] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2027ms or 40 ticks behind
[15Jul2024 23:18:14.703] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6079ms or 121 ticks behind
[15Jul2024 23:18:32.927] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3254ms or 65 ticks behind
[15Jul2024 23:18:50.550] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2627ms or 52 ticks behind
[15Jul2024 23:18:58.008] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> kevin thinking with his brain
[15Jul2024 23:19:07.816] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2293ms or 45 ticks behind
[15Jul2024 23:19:30.323] [Server thread/INFO] [betterendisland/]: Found all crystals, respawning dragon.
[15Jul2024 23:20:00.480] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:20:00.488] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:20:38.217] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has made the advancement [Take Aim]
[15Jul2024 23:21:12.029] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> free arrows thanks guys
[15Jul2024 23:21:26.412] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was doomed to fall by Ender Dragon
[15Jul2024 23:21:41.426] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2053ms or 41 ticks behind
[15Jul2024 23:21:45.289] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid was doomed to fall by Ender Dragon
[15Jul2024 23:21:51.935] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! 1757.914015406318,72.37870315946081,-557.4717312576727
[15Jul2024 23:21:51.983] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! 1757.914015406318,72.37870315946081,-557.4717312576727
[15Jul2024 23:21:54.114] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> nmarks
[15Jul2024 23:21:58.584] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2161ms or 43 ticks behind
[15Jul2024 23:22:29.270] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> average prism architecture
[15Jul2024 23:22:53.919] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was doomed to fall by Ender Dragon
[15Jul2024 23:22:55.116] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! -1690.4915898428465,-88.0,536.6838258676308
[15Jul2024 23:23:04.713] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved wrongly!
[15Jul2024 23:23:10.953] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid was doomed to fall by Ender Dragon
[15Jul2024 23:23:14.376] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2002ms or 40 ticks behind
[15Jul2024 23:23:21.751] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has made the advancement [Free the End]
[15Jul2024 23:23:32.497] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:23:50.829] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> ignitium chestplate allows for elytra + chestplate
[15Jul2024 23:23:58.436] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has reached the goal [Sky's the Limit]
[15Jul2024 23:23:59.019] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I got one ingot
[15Jul2024 23:25:16.030] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I ran out of ender pearls
[15Jul2024 23:25:18.823] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I gave jay my 100
[15Jul2024 23:25:30.109] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve fell from a high place
[15Jul2024 23:25:33.860] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I just got 5 from killing one
[15Jul2024 23:25:36.467] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> :skull:
[15Jul2024 23:25:41.197] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2023ms or 40 ticks behind
[15Jul2024 23:25:48.860] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> looting 4 what
[15Jul2024 23:25:57.304] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved too quickly! 0.3843422472836977,-10.529193645291315,0.20241666472725228
[15Jul2024 23:26:00.437] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 4263ms or 85 ticks behind
[15Jul2024 23:26:00.479] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved too quickly! 0.3354264676791914,-11.440309529450815,0.05406048951340381
[15Jul2024 23:26:10.592] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve moved too quickly! -2.811924510559585,72.5,-0.9244436293245144
[15Jul2024 23:26:17.118] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was slain by Enderman
[15Jul2024 23:26:18.712] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3289ms or 65 ticks behind
[15Jul2024 23:26:20.824] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1758.1624406386827,72.37870315946081,-557.6803322600672
[15Jul2024 23:26:20.837] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1758.1624406386827,72.37870315946081,-557.6803322600672
[15Jul2024 23:26:20.851] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1758.1624406386827,72.37870315946081,-557.6803322600672
[15Jul2024 23:26:20.865] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1758.1624406386827,72.37870315946081,-557.6803322600672
[15Jul2024 23:26:33.773] [Server thread/INFO] [betterendisland/]: Found all crystals, respawning dragon.
[15Jul2024 23:26:36.689] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3016ms or 60 ticks behind
[15Jul2024 23:26:54.612] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2938ms or 58 ticks behind
[15Jul2024 23:27:09.548] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:27:09.554] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid blew up
[15Jul2024 23:27:09.555] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:27:12.317] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2743ms or 54 ticks behind
[15Jul2024 23:27:13.321] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1757.9511874280383,72.37870315946081,-557.6724359461809
[15Jul2024 23:27:29.523] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2249ms or 44 ticks behind
[15Jul2024 23:27:32.460] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> racism?
[15Jul2024 23:27:46.599] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2125ms or 42 ticks behind
[15Jul2024 23:27:47.552] [Server thread/INFO] [liecounter/]: Prsid: /lie add ioBdaSylemertxE
[15Jul2024 23:27:47.910] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE has lied 166 times.
[15Jul2024 23:27:52.251] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> the allegations are false
[15Jul2024 23:28:03.812] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2238ms or 44 ticks behind
[15Jul2024 23:28:11.805] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> who doesn't have thef ree the end advancement
[15Jul2024 23:28:20.456] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> kevin, natalie?
[15Jul2024 23:28:27.375] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2001ms or 40 ticks behind
[15Jul2024 23:28:47.780] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2006ms or 40 ticks behind
[15Jul2024 23:29:05.959] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 3185ms or 63 ticks behind
[15Jul2024 23:29:23.135] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2211ms or 44 ticks behind
[15Jul2024 23:30:17.603] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> nah I'm gatsby
[15Jul2024 23:30:18.184] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was slain by Ender Dragon
[15Jul2024 23:30:19.826] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> nice to meet you
[15Jul2024 23:30:21.711] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> nah i'm dead
[15Jul2024 23:30:24.271] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1757.919612875516,72.46415937495544,-557.2699391839326
[15Jul2024 23:30:24.286] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1757.919612875516,72.46415937495544,-557.2699391839326
[15Jul2024 23:30:24.300] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1757.919612875516,72.46415937495544,-557.2699391839326
[15Jul2024 23:30:24.313] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! 1757.919612875516,72.46415937495544,-557.2699391839326
[15Jul2024 23:30:33.893] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2020ms or 40 ticks behind
[15Jul2024 23:30:49.363] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was slain by Enderman
[15Jul2024 23:30:51.944] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: ioBdaSylemertxE moved too quickly! 10.348994849764846,12.992601615909209,17.088158116725353
[15Jul2024 23:30:54.393] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2019ms or 40 ticks behind
[15Jul2024 23:31:15.404] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 6030ms or 120 ticks behind
[15Jul2024 23:31:17.413] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> okay it's whoever wants the kill
[15Jul2024 23:31:21.370] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <stellarumsalve> ok me
[15Jul2024 23:31:28.369] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve was doomed to fall
[15Jul2024 23:31:33.385] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> take it
[15Jul2024 23:31:33.560] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Free the End]
[15Jul2024 23:31:35.160] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> gg
[15Jul2024 23:31:43.565] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:31:52.711] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <stellarumsalve> 1 sec
[15Jul2024 23:32:02.983] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <stellarumsalve> can i get elytra
[15Jul2024 23:32:27.433] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve was shot by Prsid
[15Jul2024 23:32:43.419] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> y'all too slow
[15Jul2024 23:32:45.183] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> round 4?
[15Jul2024 23:32:46.354] [Server thread/WARN] [net.minecraft.server.MinecraftServer/]: Can't keep up! Is the server overloaded? Running 2030ms or 40 ticks behind
[15Jul2024 23:32:55.199] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> I'll wait a sec
[15Jul2024 23:33:03.597] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> free netherite armor on teh ground
[15Jul2024 23:33:18.369] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> netherite smetherite
[15Jul2024 23:33:32.769] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> y'all found their bodies?
[15Jul2024 23:33:36.615] [Server thread/INFO] [betterendisland/]: Found all crystals, respawning dragon.
[15Jul2024 23:33:47.862] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has reached the goal [Sky's the Limit]
[15Jul2024 23:33:56.577] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was slain by Enderman
[15Jul2024 23:34:06.789] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:34:06.794] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:34:47.577] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> thanks for the arrows guys
[15Jul2024 23:34:49.979] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> yw
[15Jul2024 23:35:08.035] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> gg
[15Jul2024 23:35:20.581] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid was slain by Ender Dragon
[15Jul2024 23:35:27.838] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was doomed to fall by Ender Dragon
[15Jul2024 23:35:42.364] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> natalie I'm gonna shoot you
[15Jul2024 23:35:45.618] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> again
[15Jul2024 23:35:49.253] [Server thread/INFO] [liecounter/]: Prsid: /lie add stellarumsalve
[15Jul2024 23:35:49.595] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has lied 21 times.
[15Jul2024 23:35:59.168] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid was doomed to fall by Ender Dragon
[15Jul2024 23:36:00.469] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Kinetikid moved too quickly! -1683.7210340583665,-88.0,539.0123754518588
[15Jul2024 23:36:03.784] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> honestly love watching that
[15Jul2024 23:36:07.377] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> bro is flting
[15Jul2024 23:36:31.570] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> yep
[15Jul2024 23:36:34.385] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid was slain by Ender Dragon
[15Jul2024 23:36:39.165] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> rip
[15Jul2024 23:36:42.793] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was slain by Ender Dragon
[15Jul2024 23:36:47.569] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> bro I love watching this
[15Jul2024 23:37:05.566] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> bro I gave you a valkerie cape
[15Jul2024 23:37:09.983] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid was slain by Ender Dragon
[15Jul2024 23:37:15.055] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> oh...
[15Jul2024 23:37:18.035] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was slain by Ender Dragon
[15Jul2024 23:37:21.442] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> dude that took me like
[15Jul2024 23:37:26.267] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> 3 days to grind for
[15Jul2024 23:37:27.957] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was shot by Skeleton
[15Jul2024 23:37:27.987] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> why -
[15Jul2024 23:37:36.432] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was shot by Skeleton
[15Jul2024 23:37:38.236] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid was slain by Enderman
[15Jul2024 23:37:46.619] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> get edge of tomorrowed fucker
[15Jul2024 23:37:47.773] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> how can I help
[15Jul2024 23:38:40.990] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> for full clarity valkerie armor is ~diamond
[15Jul2024 23:38:54.049] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid fell from a high place
[15Jul2024 23:39:08.166] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> almost died from the lightning
[15Jul2024 23:39:21.035] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> literally half a heart
[15Jul2024 23:40:44.187] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> oh shoot
[15Jul2024 23:40:47.374] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> mb I'll stop
[15Jul2024 23:40:52.231] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has made the advancement [Free the End]
[15Jul2024 23:41:04.383] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:41:29.182] [Server thread/INFO] [betterendisland/]: Found all crystals, respawning dragon.
[15Jul2024 23:41:34.562] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> last fight?
[15Jul2024 23:41:49.761] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was slain by Enderman
[15Jul2024 23:41:59.389] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:41:59.395] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve blew up
[15Jul2024 23:41:59.397] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:42:01.444] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> natalie it's not worth it
[15Jul2024 23:42:08.590] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> rahul took half of the dungeons
[15Jul2024 23:42:29.963] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> ?
[15Jul2024 23:42:46.532] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve was slain by Enderman
[15Jul2024 23:42:46.783] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> we have gotten insanely efficient
[15Jul2024 23:43:28.694] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> no this is smart
[15Jul2024 23:43:32.031] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve was shot by Prsid
[15Jul2024 23:43:43.514] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> do I giant obsidian her body
[15Jul2024 23:43:47.608] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <Prsid> go for it
[15Jul2024 23:44:09.455] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was doomed to fall by Ender Dragon
[15Jul2024 23:44:23.061] [Server thread/INFO] [liecounter/]: stellarumsalve: /lie add Prsid
[15Jul2024 23:44:23.458] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid has lied 21 times.
[15Jul2024 23:44:29.356] [Server thread/INFO] [liecounter/]: Prsid: /lie add stellarumsalve
[15Jul2024 23:44:29.457] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has lied 22 times.
[15Jul2024 23:45:41.183] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid was doomed to fall
[15Jul2024 23:45:47.340] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid was slain by Ender Dragon
[15Jul2024 23:45:58.892] [Server thread/INFO] [betterendisland/]: Set the exit portal location to: BlockPos{x=0, y=64, z=0}
[15Jul2024 23:46:34.466] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> it's not a "one tap" as natalie said
[15Jul2024 23:46:36.281] [Server thread/WARN] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid moved too quickly! -1656.1648034937143,-87.30543845175121,549.718221273637
[15Jul2024 23:46:41.152] [Server thread/INFO] [liecounter/]: ioBdaSylemertxE: /lie add stellarumsalve
[15Jul2024 23:46:41.455] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve has lied 23 times.
[15Jul2024 23:47:00.019] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> left her at half a heart I'm satisfied
[15Jul2024 23:47:03.146] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> i'm going to bed
[15Jul2024 23:47:04.382] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: <ioBdaSylemertxE> gn gamers
[15Jul2024 23:47:07.981] [Server thread/INFO] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: Prsid lost connection: Disconnected
[15Jul2024 23:47:07.981] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Prsid left the game
[15Jul2024 23:47:07.981] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for f8cf9718-2e0d-4902-a500-61408a4b1824
[15Jul2024 23:47:20.288] [Server thread/INFO] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: ioBdaSylemertxE lost connection: Disconnected
[15Jul2024 23:47:20.288] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: ioBdaSylemertxE left the game
[15Jul2024 23:47:20.288] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 7aed0a75-9349-4362-9283-bcfdd3b0e80a
[15Jul2024 23:50:23.526] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: Kinetikid has made the advancement [Diamonds!]
[15Jul2024 23:53:00.195] [Server thread/INFO] [net.minecraft.server.network.ServerGamePacketListenerImpl/]: stellarumsalve lost connection: Disconnected
[15Jul2024 23:53:00.195] [Server thread/INFO] [net.minecraft.server.MinecraftServer/]: stellarumsalve left the game
[15Jul2024 23:53:00.195] [Server thread/INFO] [xaero.pac.OpenPartiesAndClaims/]: Updating all forceload tickets for 78cca7c2-7bce-4c45-b786-3880d464352a`)
);
