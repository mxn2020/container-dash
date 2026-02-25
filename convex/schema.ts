import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    containers: defineTable({ name: v.string(), image: v.string(), status: v.string(), hostId: v.string(), ports: v.string() }).index("by_status", ["status"]),
    images: defineTable({ repo: v.string(), tag: v.string(), digest: v.string(), sizeBytes: v.number(), pulled: v.string() }),
    volumes: defineTable({ name: v.string(), driver: v.string(), mountpoint: v.string() }),
    logs: defineTable({ containerId: v.id("containers"), level: v.string(), message: v.string(), ts: v.string() }).index("by_container", ["containerId"])
});
