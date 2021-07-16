import { Actor } from "xstate";
import { CoordsType, DirectionType } from "../../types";

export interface PlayerContextType {
  coords: CoordsType;
  health: number;
}

export type ArrowButtonClickedType = {
  direction: DirectionType;
  type: "ARROW_BUTTON_CLICKED";
};

export type PlayerStateType = {
  context: PlayerContextType;
  value: "alive" | "dead";
};

export type ResetPlayerCoordsType = {
  type: "RESET_PLAYER_COORDS";
};

export type PlayerEventType = ArrowButtonClickedType | ResetPlayerCoordsType;

export type PlayerActorType = Actor<PlayerContextType, PlayerEventType>;
