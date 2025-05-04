import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

const weeks = [1, 2, 3, 4, 5, 6, 7, 8];

const weekPlans = {
  1: "General conditioning: Full-body strength, 3km run, martial arts basics, 30min yoga.",
  2: "Desert prep: Endurance strength, 5km run, heat-resistance shadowboxing, cooling yoga.",
  3: "Jungle agility: Functional strength, trail intervals, mobility-focused martial arts, balance yoga.",
  4: "Polar power: Heavy strength, long cycling, clinch martial arts, spine and breath yoga.",
  5: "Urban agility: Plyometric strength, stairs HIIT, evasive martial arts, dynamic yoga.",
  6: "Mixed terrain: Circuit training, trail/urban run, combo martial flow, mental-focus yoga.",
  7: "Endurance test: Long AMRAP, 12km run/cycle, bag work under fatigue, breath-centric yoga.",
  8: "Peak taper: Light complexes, moderate cardio, sparring flow, visualization yoga."
};

export default function FieldworkFitnessApp() {
  const [currentWeek, setCurrentWeek] = useState(1);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-4 flex flex-col items-center">
        <Image
          src="/ChatGPT Image May 3, 2025, 05_49_13 PM.png"
          alt="Fieldwork Fitness Logo"
          width={200}
          height={200}
        />
        <h1 className="text-3xl font-bold mt-2 text-center">Fieldwork Fitness by Matthew Marriott</h1>
      </div>
      <Tabs defaultValue="1" onValueChange={(val) => setCurrentWeek(Number(val))}>
        <TabsList className="grid grid-cols-4 gap-2 mb-4">
          {weeks.map((week) => (
            <TabsTrigger key={week} value={week.toString()}>
              Week {week}
            </TabsTrigger>
          ))}
        </TabsList>
        {weeks.map((week) => (
          <TabsContent key={week} value={week.toString()}>
            <Card>
              <CardContent className="p-4">
                <p>{weekPlans[week]}</p>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
