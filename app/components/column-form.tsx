import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FRAME_FRAME_LOAD_TYPES,
  FRAME_FRAME_LOAD_TYPE_LABELS,
} from "@/app/utils/frameloadTypes";
import { Column } from "../types";

interface ColumnFormProps {
  columns: Column[];
  onColumnChange: (index: number, field: keyof Column, value: any) => void;
}

export default function ColumnForm({
  columns,
  onColumnChange,
}: ColumnFormProps) {
  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-slate-800 to-purple-900 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-white border-b border-purple-700/30 pb-4">
        Column Details
      </h2>
      {columns.map((column, index) => (
        <div
          key={index}
          className="space-y-4 p-6 bg-slate-900/50 rounded-xl shadow-md hover:shadow-purple-500/10 transition-shadow"
        >
          <h3 className="text-xl font-semibold text-gray-200 flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-purple-900 text-purple-200 flex items-center justify-center text-sm">
              {index + 1}
            </span>
            Column {index + 1}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-300">
                Length <span className="text-purple-400 text-xs">(m)</span>
              </Label>
              <Input
                type="number"
                value={column.length}
                onChange={(e) =>
                  onColumnChange(
                    index,
                    "length",
                    parseFloat(e.target.value) || 0
                  )
                }
                className="bg-slate-800 border-purple-700/50 focus:border-purple-500 focus:ring-purple-500 rounded-lg text-white"
              />
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-300">
                Moment of Inertia{" "}
                <span className="text-purple-400 text-xs">(I)</span>
              </Label>
              <Input
                type="number"
                value={column.momentOfInertia}
                onChange={(e) =>
                  onColumnChange(
                    index,
                    "momentOfInertia",
                    parseFloat(e.target.value) || 0
                  )
                }
                className="bg-slate-800 border-purple-700/50 focus:border-purple-500 focus:ring-purple-500 rounded-lg text-white"
              />
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-300">
                Support Type
              </Label>
              <Select
                value={column.supportType}
                onValueChange={(value) =>
                  onColumnChange(index, "supportType", value)
                }
              >
                <SelectTrigger className="bg-slate-800 border-purple-700/50 focus:border-purple-500 focus:ring-purple-500 rounded-lg text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-700/50 rounded-lg shadow-lg">
                  <SelectItem
                    value="fixed"
                    className="text-white hover:bg-purple-700/30"
                  >
                    Fixed
                  </SelectItem>
                  <SelectItem
                    value="hinged"
                    className="text-white hover:bg-purple-700/30"
                  >
                    Hinged
                  </SelectItem>
                  <SelectItem
                    value="roller"
                    className="text-white hover:bg-purple-700/30"
                  >
                    Roller
                  </SelectItem>
                  <SelectItem
                    value="none"
                    className="text-white hover:bg-purple-700/30"
                  >
                    None
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-300">
                Load Type
              </Label>
              <Select
                value={column.loadType}
                onValueChange={(value) =>
                  onColumnChange(index, "loadType", value)
                }
              >
                <SelectTrigger className="bg-slate-800 border-purple-700/50 focus:border-purple-500 focus:ring-purple-500 rounded-lg text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-700/50 rounded-lg shadow-lg">
                  {Object.entries(FRAME_FRAME_LOAD_TYPES).map(
                    ([key, value]) => (
                      <SelectItem
                        key={key}
                        value={key}
                        className="text-white hover:bg-purple-700/30"
                      >
                        {FRAME_FRAME_LOAD_TYPE_LABELS[value]}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
            {column.loadType !== "NONE" && (
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-300">
                  Load Magnitude{" "}
                  <span className="text-purple-400 text-xs">(kN)</span>
                </Label>
                <Input
                  type="number"
                  value={column.loadMagnitude}
                  onChange={(e) =>
                    onColumnChange(
                      index,
                      "loadMagnitude",
                      parseFloat(e.target.value) || 0
                    )
                  }
                  className="bg-slate-800 border-purple-700/50 focus:border-purple-500 focus:ring-purple-500 rounded-lg text-white"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
