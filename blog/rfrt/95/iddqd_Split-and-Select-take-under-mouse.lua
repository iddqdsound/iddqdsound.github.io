--[[
 * ReaScript Name: Split & Select take under mouse
 * Author: 
 * Version: 1.0
]]--

local function main()
  reaper.PreventUIRefresh(1)
  reaper.Main_OnCommand(40748, 0)
  reaper.Main_OnCommand(2008, 0)
  reaper.Main_OnCommand(41342, 0)
  reaper.PreventUIRefresh(-1)
  reaper.UpdateArrange()
  reaper.UpdateTimeline()
end

main()