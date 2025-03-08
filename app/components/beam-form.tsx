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
  FRAME_BEAM_LOAD_TYPES,
  FRAME_BEAM_LOAD_TYPE_LABELS,
} from "@/app/utils/frameloadTypes";
import { Beam } from "../types";

interface BeamFormProps {
  beams: Beam[];
  onBeamChange: (index: number, field: keyof Beam, value: any) => void;
}

export default function BeamForm({ beams, onBeamChange }: BeamFormProps) {
  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-slate-800 to-purple-900 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-white border-b border-purple-700/30 pb-4">
        Beam Details
      </h2>
      {beams.map((beam, index) => (
        <div
          key={index}
          className="space-y-4 p-6 bg-slate-900/50 rounded-xl shadow-md hover:shadow-purple-500/10 transition-shadow"
        >
          <h3 className="text-xl font-semibold text-gray-200 flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-purple-900 text-purple-200 flex items-center justify-center text-sm">
              {index + 1}
            </span>
            Beam {index + 1}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-300">
                Length <span className="text-purple-400 text-xs">(m)</span>
              </Label>
              <Input
                type="number"
                value={beam.length}
                onChange={(e) =>
                  onBeamChange(index, "length", parseFloat(e.target.value) || 0)
                }
                className="bg-slate-800 border-purple-700/50 focus:border-purple-500 focus:ring-purple-500 rounded-lg text-white"
              />
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-300">
                Moment of Inertia{" "}
                <span className="text-purple-400 text-xs">(m⁴)</span>
              </Label>
              <Input
                type="number"
                value={beam.momentOfInertia}
                onChange={(e) =>
                  onBeamChange(
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
                Load Type
              </Label>
              <Select
                value={beam.loadType}
                onValueChange={(value) =>
                  onBeamChange(index, "loadType", value)
                }
              >
                <SelectTrigger className="bg-slate-800 border-purple-700/50 focus:border-purple-500 focus:ring-purple-500 rounded-lg text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-700/50 rounded-lg shadow-lg">
                  {Object.entries(FRAME_BEAM_LOAD_TYPES).map(([key, value]) => (
                    <SelectItem
                      key={key}
                      value={key}
                      className="text-white hover:bg-purple-700/30"
                    >
                      {FRAME_BEAM_LOAD_TYPE_LABELS[value]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {beam.loadType !== "NONE" && (
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-300">
                  Load Magnitude{" "}
                  <span className="text-purple-400 text-xs">
                    {beam.loadType === "UDL" ? "(kN/m)" : "(kN)"}
                  </span>
                </Label>
                <Input
                  type="number"
                  value={beam.loadMagnitude}
                  onChange={(e) =>
                    onBeamChange(
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
