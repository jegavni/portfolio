import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function EditableSection({ children, form, onSave }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    onSave();
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing ? (
        <>
          {children}
          <Button
            className="mt-6 bg-emerald-500 text-black"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        </>
      ) : (
        <div className="space-y-4">
          {form}
          <div className="flex gap-3">
            <Button onClick={handleSave} className="bg-emerald-500 text-black">
              Save
            </Button>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}