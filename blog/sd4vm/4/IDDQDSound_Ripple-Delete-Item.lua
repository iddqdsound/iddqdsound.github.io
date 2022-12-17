-- This script was created by Lokasenna_Generate script from custom action.lua

local function main()
  reaper.PreventUIRefresh(1)
  reaper.Undo_BeginBlock()

  reaper.Main_OnCommand(40310, 0)
  reaper.Main_OnCommand(40006, 0)
  reaper.Main_OnCommand(40309, 0)

  reaper.Undo_EndBlock('Ripple Delete Item', 0)
  reaper.PreventUIRefresh(-1)
  reaper.UpdateArrange()
  reaper.UpdateTimeline()
end

main()