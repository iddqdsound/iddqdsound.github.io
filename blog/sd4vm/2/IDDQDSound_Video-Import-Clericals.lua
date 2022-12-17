-- This script was created by Lokasenna_Generate script from custom action.lua

local function main()
  reaper.PreventUIRefresh(1)
  reaper.Undo_BeginBlock()

  reaper.Main_OnCommand(40161, 0)
  reaper.Main_OnCommand(53321, 0)
  reaper.Main_OnCommand(41295, 0)
  reaper.Main_OnCommand(40940, 0)
  reaper.Main_OnCommand(55811, 0)
  reaper.Main_OnCommand(53296, 0)
  reaper.Main_OnCommand(40161, 0)
  reaper.Main_OnCommand(53321, 0)
  reaper.Main_OnCommand(40939, 0)
  reaper.Main_OnCommand(53753, 0)
  reaper.Main_OnCommand(53296, 0)
  reaper.Main_OnCommand(40688, 0)
  reaper.Main_OnCommand(41593, 0)
  reaper.Main_OnCommand(40940, 0)
  reaper.Main_OnCommand(53296, 0)
  reaper.Main_OnCommand(41588, 0)
  reaper.Main_OnCommand(40688, 0)
  reaper.Main_OnCommand(41174, 0)
  reaper.Main_OnCommand(58005, 0)

  reaper.Undo_EndBlock('Video Import Clericals', 0)
  reaper.PreventUIRefresh(-1)
  reaper.UpdateArrange()
  reaper.UpdateTimeline()
end

main()